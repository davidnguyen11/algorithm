# https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
#!/bin/python

import sys


h = map(int, raw_input().strip().split(' '))
word = raw_input().strip()

alphabet_index = {
    'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7,
    'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15,
    'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23,
    'y': 24, 'z':25
}
str_length = len(word)
word_array = []

for i in range(str_length):
    word_array.append(alphabet_index[word[i]])

max_length = h[word_array[0]]
for i in range(str_length):
    if h[word_array[i]] > max_length:
        max_length = h[word_array[i]]

print max_length * str_length
