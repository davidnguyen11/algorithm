# https://www.hackerrank.com/challenges/weighted-uniform-string/problem
#!/bin/python

import sys

arr_s = list(raw_input().strip())
n = int(raw_input().strip())
weights = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
}

substr_length = []
temp = arr_s.pop()

sum_char = weights[temp]

substr_length = {}
substr_length[sum_char] = True

for item in arr_s[::-1]:
    if item != temp:
        sum_char = 0

    sum_char = sum_char + weights[item]
    substr_length[sum_char] = True
    temp = arr_s.pop()

for a0 in xrange(n):
    x = int(raw_input().strip())
    if substr_length.get(x, False):
        print 'Yes'
    else:
        print 'No'
