package router

import (
	"database/sql"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter(db *sql.DB) *gin.Engine {

	router := gin.Default()
	
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"GET","POST","PUT","DELETE"},
		AllowHeaders: []string{"Origin","Content-Type","Authorization"},
		AllowCredentials: true,
	}))
	
	router.GET("/api/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{"message":"pong"})
	})
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	SetupPlayerRoutes(router.Group("/api/players"), db)
	SetupUserRoutes(router.Group("/api/users"), db)
	
	return router
}
