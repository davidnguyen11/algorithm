#!/bin/python
# https://www.hackerrank.com/challenges/apple-and-orange?h_r=next-challenge&h_v=zen

import sys

s,t = raw_input().strip().split(' ')
s,t = [int(s),int(t)]
a,b = raw_input().strip().split(' ')
a,b = [int(a),int(b)]
m,n = raw_input().strip().split(' ')
m,n = [int(m),int(n)]
apple = map(int,raw_input().strip().split(' '))
orange = map(int,raw_input().strip().split(' '))
count = 0

for i in range(m):
  if a + apple[i] >= s and a + apple[i] <= t:
    count = count + 1
print count

count = 0
for i in range(n):
  if b + orange[i] >= s and b + orange[i] <= t:
    count = count + 1
print count
