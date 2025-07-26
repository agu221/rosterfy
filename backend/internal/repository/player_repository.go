package repository

import (
	"database/sql"
	"rosterfy/backend/internal/models"
)

type PlayerRepository struct {
	DB *sql.DB
}

func NewPlayerRepository(db *sql.DB) *PlayerRepository{
	return &PlayerRepository{DB: db}
}

func (r *PlayerRepository) CreatePlayer(p *models.Player) error {
	_, err := r.DB.Exec(`INSERT INTO players (first_name, last_name, dob) VALUES ($1,$2,$3)`,
		p.FirstName, p.LastName, p.DOB)
	return err
}

func (r *PlayerRepository) GetPlayerIDByName(first, last string) (int, error) {
	var id int
	err := r.DB.QueryRow("SELECT player_id FROM players WHERE LOWER(first_name) = LOWER($1) AND LOWER(last_name) = LOWER($2);", first, last).Scan(&id)
	return id, err
}

// func (r *PlayerRepository) GetRegisteredTeams(playerID int) ([]models.RegisteredTeamsPlayerDashboard, error) {
// 	var teams []models.RegisteredTeamsPlayerDashboard
// 	rows, err := r.DB.Query(`SELECT t.team_name, t.sport, l.league_name, f.match_date
//     FROM team_players tp
//     JOIN teams t ON t.team_id = tp.team_id
//     JOIN fixtures f ON f.home_team_id = t.team_id OR f.away_team_id = t.team_id
//     JOIN leagues l ON l.league_id = t.league_id
//     WHERE tp.player_id = $1
//     ORDER BY f.match_date DESC
//     LIMIT 1`, playerID)
// 	if err != nil {
// 		return teams, err
// 	}
// 	defer rows.Close()

// 	for rows.Next() {
// 		var team models.RegisteredTeamsPlayerDashboard
// 		_ = rows.Scan(&team.TeamName, &team.Sport, &team.LeagueName, &team.NextMatchDate)
// 		teams = append(teams, team)
// 	}

// 	return teams, nil
// }
