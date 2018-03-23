#!/bin/python

import sys

# https://www.hackerrank.com/challenges/sock-merchant?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

def sockMerchant(n, ar):
  count = 0
  if n == 1:
    return count
  for i in range(0, n - 1):
    for k in range(i + 1, n):
      if ar[i] == ar[k] and ar[i] <> 0 and ar[k] <> 0:
        count = count + 1
        ar[i] = 0
        ar[k] = 0
        break
  return count

# n = int(raw_input().strip())
# ar = map(int, raw_input().strip().split(' '))
# n = 9
# ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

n = 4
ar = [1, 2, 2, 1]

result = sockMerchant(n, ar)
print(result)
