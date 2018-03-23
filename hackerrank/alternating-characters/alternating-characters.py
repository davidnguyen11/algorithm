# https://www.hackerrank.com/challenges/alternating-characters/problem
#!/bin/python

import sys

def alternatingCharacters(s):
    list_s = list(s)
    temp = list_s.pop()
    count = 0

    while len(list_s) > 0:
        next_item = list_s.pop()
        if temp == next_item:
            count = count + 1
        else:
            temp = next_item
    return count

q = int(raw_input().strip())
for a0 in xrange(q):
    s = raw_input().strip()
    result = alternatingCharacters(s)
    print(result)
