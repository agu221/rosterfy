package models

import "time"

type Player struct {
	ID        int       `json:"id" db:"player_id"`
	FirstName string    `json:"firstName" db:"first_name"`
	LastName  string    `json:"lastName" db:"last_name"`
	DOB       time.Time `json:"dob" db:"date_of_birth"`
	CreatedAt time.Time `json:"createdAt,omitempty" db:"created_at"`
}

type PlayerInput struct {
	FirstName string    `json:"firstName" binding:"required"`
	LastName  string    `json:"lastName"  binding:"required"`
	DOB       time.Time `json:"dob" binding:"required"`
}

type PlayerNameInput struct {
	FullName string `json:"playerName" binding:"required"`
}

type PlayerTeams struct {
	PlayerID           int                              `json:"playerID"`
	RegisteredTeamsArr []RegisteredTeamsPlayerDashboard `json:"registeredTeams"`
}
