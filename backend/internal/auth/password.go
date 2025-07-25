package auth

import "golang.org/x/crypto/bcrypt"

const PasswordCost = 15

func HashPassword(password string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), PasswordCost)
	return string(hash), err
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil, err
}
