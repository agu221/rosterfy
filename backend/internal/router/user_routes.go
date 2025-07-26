package router

import (
	"database/sql"
	"os"
	"rosterfy/backend/internal/auth"
	"rosterfy/backend/internal/handlers"
	"rosterfy/backend/internal/repository"

	"github.com/gin-gonic/gin"
)

func SetupUserRoutes(rg *gin.RouterGroup, db *sql.DB) {
	userRepo := repository.NewUserRepository(db)
	jwtManager := auth.NewJWTManager(os.Getenv("JWT_SECRET"))

	rg.POST("/register", handlers.UserRegisterHandler(userRepo))
	rg.POST("/login", handlers.UserLoginHandler(userRepo, jwtManager))
}
