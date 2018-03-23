# https://www.hackerrank.com/challenges/sherlock-and-squares/problem
import math

t = int(raw_input())
i = 0

while i < t:
  input = map(int, raw_input().strip().split(' '))
  a = math.floor(math.sqrt(input[0]))
  b = math.floor(math.sqrt(input[1]))
  count = b - a
  print int(count)
  i = i + 1