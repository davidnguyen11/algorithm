#!/bin/python
# https://www.hackerrank.com/challenges/drawing-book/problem

import sys

def solve(n, p):
    if n % 2 == 0:
        n = n + 2
    else:
        n = n + 1

    middle = n / 2
    count  = 0

    left = True
    start = 0
    end = middle
    step = 2

    if p >= middle:
        left = False
        start = n - 1
        end = middle + 1
        step = -2

    for i in range(start, end, step):
        if not left and (i == p or i - 1 == p):
            break
        if left and (i == p or i + 1 == p):
            break
        else:
            count = count + 1
    return count


n = int(raw_input().strip())
p = int(raw_input().strip())
result = solve(n, p)
print(result)
