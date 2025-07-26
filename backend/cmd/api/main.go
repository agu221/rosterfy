package main

import (
	"log"
	"os"
	"rosterfy/backend/internal/database"
	"rosterfy/backend/internal/router"

	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err!=nil{
		log.Println("Could not load .env file")
	}
	db, err := database.Connect()
	if err!=nil{
		log.Fatalf("Could not connect to db %v", err)
	}

	defer db.Close()

	r := router.SetupRouter(db)

	port :=os.Getenv("PORT")
	if port == ""{
		port = "8080"
	}
	log.Printf("Server running on http:localhost:%s", port)
	r.Run(":" + port)
}
