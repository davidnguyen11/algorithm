# https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
#!/bin/python

import sys

q = int(raw_input().strip())
for a0 in xrange(q):
    s = raw_input().strip()
    templates = ['k', 'n', 'a', 'r', 'r', 'e', 'k', 'c', 'a', 'h']
    temp = templates.pop()
    length_s = len(s)
    valid = False

    for i in range(length_s):
        if temp == s[i]:
            temp = templates.pop()
        if len(templates) == 0:
            valid = True
            break

    if valid:
        print 'YES'
    else:
        print 'NO'
