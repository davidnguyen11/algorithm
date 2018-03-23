# x1 = 0
# v1 = 3
# x2 = 4
# v2 = 2

# x1 = 0
# v1 = 2
# x2 = 5
# v2 = 3

#!/bin/python
# https://www.hackerrank.com/challenges/kangaroo?h_r=next-challenge&h_v=zen

import sys

def kangaroo(x1, v1, x2, v2):
  if x2 > x1 and v2 > v1:
    return 'NO'

  if x1 > x2 and v1 > v2:
    return 'NO'

  result = 'NO'
  for i in range(100000):
    x1 = x1 + v1
    x2 = x2 + v2
    if x1 == x2:
      result = 'YES'
      break
  return result

x1, v1, x2, v2 = raw_input().strip().split(' ')
x1, v1, x2, v2 = [int(x1), int(v1), int(x2), int(v2)]
result = kangaroo(x1, v1, x2, v2)
print(result)
