package utils

import "strings"

func SplitFullName(full string) (string, string) {
	parts := strings.Fields(full)
	if len(parts) == 0 {
		return "", ""
	} else if len(parts) == 1 {
		return parts[0], ""
	}
	return parts[0], strings.Join(parts[1:], " ")
}
