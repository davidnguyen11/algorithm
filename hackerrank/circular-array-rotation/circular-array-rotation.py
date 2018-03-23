# https://www.hackerrank.com/challenges/circular-array-rotation/problem
#!/bin/python

import sys

n,k,q = raw_input().strip().split(' ')
n,k,q = [int(n),int(k),int(q)]
a = map(int,raw_input().strip().split(' '))
m = []
for a0 in xrange(q):
    m.append(int(raw_input().strip()))

# if k > n * times => we can use mode to get the redundant
# k = 9, n = 4 => k > n * 2 => 9 > 8
k = k % n

array_index = []

for i in xrange(n):
    index = n - k + i
    if index == n:
        index = 0

    if index > n:
        index = index - n

    array_index.append(index)

for i in xrange(q):
    print a[array_index[m[i]]]
