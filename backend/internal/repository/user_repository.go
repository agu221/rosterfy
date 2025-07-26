package repository

import (
	"database/sql"
	"rosterfy/backend/internal/models"
)

type UserRepository struct {
	DB *sql.DB
}
func NewUserRepository(db *sql.DB) *UserRepository{
	return &UserRepository{DB: db}
}
func (r *UserRepository) CreateUser(u *models.User) error {
	_, err := r.DB.Exec(`INSERT INTO registered_users (username, first_name, last_name, email, password_hash, phone_number, gender, date_of_birth, role)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
		u.Username, u.FirstName, u.LastName, u.Email, u.PasswordHash, u.PhoneNumber, u.Gender, u.DOB, u.Role)
	return err
}

func (r *UserRepository) FindByEmailOrUsername(value string) (*models.User, error) {
	var u models.User
	err := r.DB.QueryRow(`SELECT user_id, password_hash FROM registered_users WHERE LOWER(email) = LOWER($1) OR LOWER(username) = LOWER($1)`, value).
		Scan(&u.ID, &u.PasswordHash)
	return &u, err
}
