alphatbet = 26

alphatbet_mapping = {
  0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h",
  8: "i", 9: "j", 10: "k", 11: "l", 12: "m", 13: "n", 14: "o", 15: "p",
  16: "q", 17: "r", 18: "s", 19: "t", 20: "u", 21: "v", 22: "w",
  23: "x", 24: "y", 25: "z"
}

class TrieNode:
  def __init__(self):
    self.children = [None] * alphatbet
    self.is_end_of_word = False

  def insert(self, keyword):
    for c in keyword:
      index = ord(c) - ord("a");

      if not self.children[index]:
        self.children[index] = TrieNode()
      self = self.children[index]

    self.is_end_of_word = True

  def is_last_node(self):
    for i in range(alphatbet):
      if self.children[i]:
        return False
    return True

  def search(self, keyword):
    for c in keyword:
      index = ord(c) - ord("a");

      if not self.children[index]:
        return False

      self = self.children[index]
    return self and self.is_end_of_word

  def get_auto_complete(self, prefix, result):
    if self.is_end_of_word:
      result.append(prefix)

    for i in range(alphatbet):
      if self.children[i]:
        self.children[i].get_auto_complete(prefix + alphatbet_mapping[i], result)

  def get_search_suggestion(self, prefix):
    root = self
    for c in prefix:
      index = ord(c) - ord("a")
      if not root.children[index]:
        return []
      root = root.children[index]

    list_keywords = []
    root.get_auto_complete(prefix, list_keywords)

    return list_keywords

  def is_empty(self):
    for i in range(alphatbet):
      if self.children[i]:
        return False
    return True

  def remove_word(self, word, depth = 0):
    # if current node has children => set node to false
    # if current node has no child => delete it
    ## recursive to the node above, if parent node has no child => delete it
    if not self:
      return None
    
    if len(word) == depth:
      if self.is_end_of_word == True:
        self.is_end_of_word = False
      
      if self.is_empty():
        self = None
      return True

    if self.is_empty() and self.is_end_of_word == False:
      self = None
      return True

    index = ord(word[depth]) - ord("a");
    self.children[index].remove_word(word, depth + 1)


trie = TrieNode()
trie.insert("the")
trie.insert("there")
trie.insert("these")
trie.insert("their")

# trie.insert("a")
# trie.insert("answer")
# trie.insert("any")

# trie.insert("by")
# trie.insert("bye")

# trie.insert("ab")

# result = trie.search("ab")
# print result

# trie = trie.remove_word("ab")

# result1 = trie.search("ab")
# print trie.children[0]

# result1 = trie.search("there")
# print result1

# result = trie.search("the")
# print result
# result1 = trie.search("theire")
# print result1

# suggestion = trie.get_search_suggestion("a")
# print suggestion

ab = trie.remove_word("there")
print "ab ab", ab

suggestion = trie.get_search_suggestion("the")
print suggestion