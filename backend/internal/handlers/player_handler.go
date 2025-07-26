package handlers

import (
	"log"
	"net/http"

	"rosterfy/backend/internal/models"
	"rosterfy/backend/internal/repository"

	"github.com/gin-gonic/gin"
)

func PostPlayerHandler(repo *repository.PlayerRepository) gin.HandlerFunc {
	return func(c *gin.Context) {
		var input models.PlayerInput
		if err := c.ShouldBindJSON(&input); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalid input"})
		}

		player := models.Player{
			FirstName: input.FirstName,
			LastName:  input.LastName,
			DOB:       input.DOB,
		}

		err := repo.CreatePlayer(&player)
		if err != nil {
			log.Printf("DB error: %v", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "could not create player"})
			return
		}

		c.JSON(http.StatusCreated, input)
	}
}
