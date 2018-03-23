# https://www.hackerrank.com/challenges/birthday-cake-candles/problem
#!/bin/python

import sys

def birthdayCakeCandles(n, ar):
    max_value = ar[0]
    count = 0

    for i in range(n):
        if ar[i] > max_value:
            max_value = ar[i]

    for i in range(n):
        if ar[i] == max_value:
            count = count + 1
    return count

n = int(raw_input().strip())
ar = map(int, raw_input().strip().split(' '))
result = birthdayCakeCandles(n, ar)
print(result)
