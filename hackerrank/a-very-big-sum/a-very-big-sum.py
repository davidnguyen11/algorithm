#!/bin/python

import sys

def aVeryBigSum(n, ar):
    sum = 0
    for i in range(n):
        sum = sum + ar[i]
    return sum

n = int(raw_input().strip())
ar = map(long, raw_input().strip().split(' '))
result = aVeryBigSum(n, ar)
print(result)
