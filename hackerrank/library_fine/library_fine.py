# test 1
# d1 = 9
# m1 = 6
# y1 = 2015

# d2 = 6
# m2 = 6
# y2 = 2015

# test 2
# d1 = 6
# m1 = 6
# y1 = 2015

# d2 = 9
# m2 = 6
# y2 = 2016

# test 3
# d1 = 5
# m1 = 5
# y1 = 2014

# d2 = 23
# m2 = 2
# y2 = 2014

# test 4
# d1 = 28
# m1 = 2
# y1 = 2015

# d2 = 15
# m2 = 4
# y2 = 2015

#!/bin/python

import sys


d1,m1,y1 = raw_input().strip().split(' ')
d1,m1,y1 = [int(d1),int(m1),int(y1)]
d2,m2,y2 = raw_input().strip().split(' ')
d2,m2,y2 = [int(d2),int(m2),int(y2)]

# https://www.hackerrank.com/challenges/library-fine/problem
def calculate():
  temp = []
  temp.append(d2 - d1)
  temp.append(m2 - m1)
  temp.append(y2 - y1)

  for i in range(2, -1, -1):
    if temp[i] > 0:
      return 0
    elif temp[i] < 0:
      break

  for i in range(3):
    temp[i] = abs(temp[i])

  if temp[2] > 0:
    return 10000
  if temp[1] > 0:
    return temp[1] * 500
  if temp[0] > 0:
    return temp[0] * 15
  return 0

result = calculate()
print result