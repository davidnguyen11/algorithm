#!/bin/python
# https://www.hackerrank.com/challenges/cut-the-sticks?h_r=next-challenge&h_v=zen
import sys

# n = 6
# arr = [5, 4, 4, 2, 2, 8]

# n = 8
# arr = [1, 2, 3, 4, 3, 3, 2, 1]

n = int(raw_input().strip())
arr = map(int,raw_input().strip().split(' '))

print n
while True:
  count = 0

  min_val = min(h for h in arr if h > 0)

  for i in range(n):
    arr[i] = arr[i] - min_val
    if arr[i] > 0:
      count = count + 1

  if count == 0:
    break

  if count > 0:
    print count