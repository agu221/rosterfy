package auth

import (
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type JWTManager struct {
	SecretKey  []byte
	AccessTTL  time.Duration
	RefreshTTL time.Duration
}

func NewJWTManager(secret string) *JWTManager {
	return &JWTManager{
		SecretKey:  []byte(secret),
		AccessTTL:  15 * time.Minute,
		RefreshTTL: 7 * 24 * time.Hour,
	}
}

func (j *JWTManager) GenerateAccessToken(userID int) (string, error) {
	return j.generateToken(userID, j.AccessTTL)
}

func (j *JWTManager) GenerateRefreshToken(userID int) (string, error) {
	return j.generateToken(userID, j.RefreshTTL)
}

func (j *JWTManager) generateToken(userID int, ttl time.Duration) (string, error) {
	claims := jwt.MapClaims{
		"user_id": userID,
		"exp":     time.Now().Add(ttl).Unix(),
		"iat":     time.Now().Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(j.SecretKey)

}

func (j *JWTManager) ParseToken(tokenStr string) (*jwt.Token, error) {
	return jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, jwt.ErrSignatureInvalid
		}
		return j.SecretKey, nil
	})
}
