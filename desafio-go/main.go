package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	args := os.Args[1:]
	var value = ""

	if len(args) > 0 {
		value = strings.Join(args[:], ", ")
	}
	
	result := fmt.Sprintf("Code.education %s!", value)

	fmt.Println(result)
}