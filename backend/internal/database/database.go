package database

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func GetConnectionString() string {
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")
	sslmode := os.Getenv("DB_SSLMODE")

	return fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		host,port,user,password,dbname,sslmode) 
}
func Connect() (*sql.DB, error) {

	connStr := GetConnectionString() 

	DB, err := sql.Open("postgres", connStr)

	if err != nil {
		return nil ,fmt.Errorf("database connection failed: %w", err)
	}
	
	if err = DB.Ping(); err != nil {
		return nil, fmt.Errorf("cannot reach database: %w", err)
	}

	fmt.Println("Connected to PostgreSQL")

	return  DB, nil
}
