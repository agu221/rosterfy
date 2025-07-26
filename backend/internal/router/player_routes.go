package router

import (
	"database/sql"
	"rosterfy/backend/internal/handlers"
	"rosterfy/backend/internal/repository"

	"github.com/gin-gonic/gin"
)

func SetupPlayerRoutes(rg *gin.RouterGroup, db *sql.DB){
	playerRepo := repository.NewPlayerRepository(db)

	rg.POST("/", handlers.PostPlayerHandler(playerRepo))
}