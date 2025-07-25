package models

import "time"

type RegisterUserRequest struct {
	FirstName   string    `json:"firstName" binding:"required"`
	LastName    string    `json:"lastName" binding:"required"`
	Username    string    `json:"username" binding:"required"`
	Email       string    `json:"email" binding:"required"`
	Password    string    `json:"password" binding:"required"`
	PhoneNumber string    `json:"phoneNumber" binding:"required"`
	DOB         time.Time `json:"dob" binding:"required"`
	Role        string    `json:"role" binding:"required"`
	Gender      string    `json:"gender" binding:"required"`
}

type LoginUserRequest struct {
	EmailOrUsername string `json:"emailOrUsername" binding:"required"`
	Password        string `json:"password" binding:"required"`
}

type User struct {
	ID           int
	Username     string
	FirstName    string
	LastName     string
	Email        string
	PasswordHash string
	PhoneNumber  string
	Gender       string
	DOB          time.Time
	Role         string
}
