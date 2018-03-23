# https://www.hackerrank.com/challenges/the-love-letter-mystery/problem
#!/bin/python
import math
import sys

def theLoveLetterMystery(s):
    n = len(s)
    mid = int(math.ceil(n / 2))
    count = 0

    for i in range(mid):
        left = s[i]
        right = s[n - 1 - i]
        ord_l = ord(left)
        ord_r = ord(right)
        count = count + abs(ord_l - ord_r)
    return count

q = int(raw_input().strip())
for a0 in xrange(q):
    s = raw_input().strip()
    result = theLoveLetterMystery(s)
    print(result)
