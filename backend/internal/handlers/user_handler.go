package handlers

import (
	"net/http"
	"rosterfy/backend/internal/auth"
	"rosterfy/backend/internal/models"
	"rosterfy/backend/internal/repository"

	"github.com/gin-gonic/gin"
)

func UserRegisterHandler(repo *repository.UserRepository) gin.HandlerFunc {
	return func(c *gin.Context) {
		var req models.RegisterUserRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		hash, err := auth.HashPassword(req.Password)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "password hash failed"})
			return
		}

		user := models.User{
			Username:     req.Username,
			FirstName:    req.FirstName,
			LastName:     req.LastName,
			Email:        req.Email,
			PasswordHash: hash,
			PhoneNumber:  req.PhoneNumber,
			DOB:          req.DOB,
			Role:         req.Role,
			Gender:       req.Gender,
		}

		err = repo.CreateUser(&user)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		c.JSON(http.StatusCreated, gin.H{"message": "user registered"})
	}
}

func UserLoginHandler(repo *repository.UserRepository, jwt *auth.JWTManager) gin.HandlerFunc {
	return func(c *gin.Context) {
		var req models.LoginUserRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		user, err := repo.FindByEmailOrUsername(req.EmailOrUsername)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid credentials"})
			return
		}

		ok, err := auth.CheckPasswordHash(req.Password, user.PasswordHash)
		if !ok || err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid credentials"})
			return
		}

		accessToken, _ := jwt.GenerateAccessToken(user.ID)
		refreshToken, _ := jwt.GenerateRefreshToken(user.ID)

		c.JSON(http.StatusOK, gin.H{
			"accessToken":  accessToken,
			"refreshToken": refreshToken,
			"message":      "login successful",
		})
	}
}
