#!/bin/python
# https://www.hackerrank.com/challenges/reduced-string/problem
import sys

def super_reduced_string(s):
    length_str = len(s)
    array_s = list(s)
    i = 0
    while i < len(array_s) - 1:
        if i == -1:
            i = 0
        if array_s[i] == array_s[i + 1]:
            del array_s[i]
            del array_s[i]
            i -= 1
        else:
            i += 1
    
    result = 'Empty String'
    if array_s:
        result = ''.join(array_s)
    return result

            

s = raw_input().strip()
result = super_reduced_string(s)
print(result)
