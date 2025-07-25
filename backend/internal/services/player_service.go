package services

import "rosterfy/backend/internal/repository"

func FindPlayerIDByFullName(repo repository.PlayerRepository, fullname string) (int, error) {
	first, last := utils.SplitFullName(fullname)
	return repo.GetPlayerIDByName(first, last)
}
