package main

import "fmt"

// AlphatbetLetter index and letter
var AlphatbetLetter = map[int]string{
	0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h",
	8: "i", 9: "j", 10: "k", 11: "l", 12: "m", 13: "n", 14: "o", 15: "p",
	16: "q", 17: "r", 18: "s", 19: "t", 20: "u", 21: "v", 22: "w",
	23: "x", 24: "y", 25: "z",
}

// Trie data structure shape
type Trie struct {
	children  []*Trie
	isEndWord bool
}

// Insert word to trie
func (t *Trie) Insert(word string) {
	root := t
	for i := 0; i < len(word); i++ {
		index := word[i] - 'a'
		if root.children[index] == nil {
			children := make([]*Trie, 26)
			root.children[index] = &Trie{children, false}
		}
		root = root.children[index]
	}
	root.isEndWord = true
}

// Search word
func (t *Trie) Search(word string) bool {
	root := t
	// loop char in string
	// each char convert char to index
	// check existing in trie and end of the world
	for i := 0; i < len(word); i++ {
		index := word[i] - 'a'
		if root.children[index] == nil {
			return false
		}
		root = root.children[index]
	}
	return root != nil && root.isEndWord
}

// IsEmpty check node does not have children
func (t *Trie) IsEmpty() bool {
	root := t
	for i := 0; i < 26; i++ {
		if root.children[i] != nil {
			return false
		}
	}
	return true
}

// Remove word
func (t *Trie) Remove(word string, depth int) {
	if t == nil {
		return
	}

	if len(word) == depth {
		if t.isEndWord == true {
			t.isEndWord = false
		}

		/*
		 * If this is the last node
		 */
		if t.IsEmpty() == true {
			t = nil
			return
		}
	}

	/*
	 * If the current node has no child and it's not the final letter of the world
	 * Why?
	 * - Because the previous node was delete => now the parent does not have any child
	 */
	if t.isEndWord == false && t.IsEmpty() == true {
		t = nil
		return
	}

	/*
	 * Depth here is the level of tree
	 * The length of the branch is the length of the word
	 */
	index := word[depth] - 'a'

	/*
	 * Recursive call to access levels of the tree
	 * Each time it calls, it will move down 1 level
	 * Based on the "depth" we can access the letter of the word
	 */
	t.children[index].Remove(word, depth+1)
}

// GetSuggestionItem recursive call to get the suggestion item
func (t *Trie) GetSuggestionItem(keyword string, result *[]string) {
	if t.isEndWord == true {
		*result = append((*result), keyword)
	}

	/*
	 * With every node, we check 26 letters has value or not
	 * if it has value, recursive call GetSuggestionItem, with
	 * - keyword update
	 * - the list of suggestion items
	 */
	for i := 0; i < 26; i++ {
		if t.children[i] != nil {
			letter := AlphatbetLetter[i]
			t.children[i].GetSuggestionItem(keyword+letter, result)
		}
	}
}

// GetSuggestion return list of suggestion items
func (t *Trie) GetSuggestion(keyword string) []string {
	/*
	 * Go to the Node contains the last key of keyword
	 * if the keyword is not existing => return []
	 * otherwise call GetSuggestionItem
	 */

	root := t
	for i := 0; i < len(keyword); i++ {
		index := keyword[i] - 'a'
		if root.children[index] == nil {
			return nil
		}
		root = root.children[index]
	}
	var result []string
	root.GetSuggestionItem(keyword, &result)
	return result
}

func main() {
	children := make([]*Trie, 26)
	trie := Trie{children, false}
	trie.Insert("the")
	trie.Insert("there")
	trie.Insert("these")
	trie.Insert("their")

	// existing := trie.Search("their")
	// fmt.Println(existing)

	// trie.Remove("their", 0)

	// existing1 := trie.Search("their")
	// fmt.Println(existing1)

	suggestion := trie.GetSuggestion("the")
	fmt.Println(suggestion)
}
