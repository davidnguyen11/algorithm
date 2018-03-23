# https://www.hackerrank.com/challenges/beautiful-binary-string/problem

#!/bin/python

import sys

def minSteps(n, B):
    pattern = '010'
    p_i = 0
    mc = 0
    count = 0
    flag = False

    for i in range(n):
        if mc == 0 and i + 1 < n:
            if B[i] == '0' and B[i + 1] == '1':
                flag = True

        if flag:
            if B[i] == pattern[p_i]:
                mc = mc + 1
                p_i = p_i + 1
                if mc == 3:
                    mc = 0
                    count = count + 1
                    p_i = 0
                    flag = False
            else:
                flag = False
                mc = 0
                p_i = 0

    return count

n = int(raw_input().strip())
B = raw_input().strip()
result = minSteps(n, B)
print(result)
