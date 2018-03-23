#!/bin/python

import sys

# https://www.hackerrank.com/challenges/caesar-cipher-1
### idea:
# always step at 'a' to calculate
# str: a b c d e
# val: 1 2 3 4 5
# k: 7
# s: c
# result => e
# Algorithm:
## c = 3 to step at 'a': distance (c to a) = 3 - 1 = 2
## k + distance = 7 + 2 = 9 => temp
## step = temp % len(str) = 9 % 5 = 4
## result str[4] = e

# =======================================================
### Test cases
# n = 11
# s = 'middle-Outz'
# k = 2

# n = 12
# s = 'Hello_World!'
# k = 4

# n = 10
# s = '159357lcfd'
# k = 98

n = int(raw_input().strip())
s = raw_input().strip()
k = int(raw_input().strip())

result = []

for i in range(n):
    if s[i].isalpha():
        min_val = 65
        max_val = 90
        if s[i].islower():
            min_val = 97
            max_val = 122

        step = (ord(s[i]) - min_val + k) % 26

        result.append(chr(step + min_val))
    else:
        result.append(s[i])

print ''.join(result)
