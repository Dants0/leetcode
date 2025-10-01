package main

import (
	"strings"
)

func lengthOfLastWord(s string) int {
	words := strings.Fields(s)
	lastWord := words[len(words)-1]
	return len(lastWord)
}

func main() {
	lengthOfLastWord(" a")
}
