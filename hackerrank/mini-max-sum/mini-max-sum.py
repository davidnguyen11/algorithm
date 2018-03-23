# https://www.hackerrank.com/challenges/mini-max-sum/problem
#!/bin/python

import sys

arr = map(int, raw_input().strip().split(' '))
n = len(arr)
result = []
for i in range(n):
    sum = 0
    for j in range(n):
        if j != i:
            sum = sum + arr[j]
    result.append(sum)

result.sort()
print result[0], result[len(result) - 1]
