# https://www.hackerrank.com/challenges/encryption/problem
#!/bin/python

import sys
import math


s = raw_input().strip()

s_length = len(s)
matrix = []
rows = int(math.floor(math.sqrt(s_length)))

if math.sqrt(s_length) - math.floor(math.sqrt(s_length)) >= 0.5:
    rows = rows + 1

columns = int(math.ceil(math.sqrt(s_length)))

k = 0

for i in range(rows):
    row_array = []
    for j in range(columns):
        value = ''
        if k < s_length:
            value = s[k]
        row_array.append(value)
        k = k + 1
    matrix.append(row_array)

result = []
for j in range(columns):
    temp_str = ''
    for i in range(rows):
        temp_str = temp_str + matrix[i][j]
    result.append(temp_str)

print ' '.join(result)
