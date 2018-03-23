#!/bin/python

import sys

def solve_item(grade):
  if grade < 38:
    return grade
  remainder = grade % 5
  missing_part = 5 - remainder
  rounded_grade = grade + missing_part
  if rounded_grade - grade < 3:
    return rounded_grade
  return grade

def solve(grades):
  results = []
  for item in grades:
    results.append(solve_item(item))
  return results

grades = [73, 67, 38, 33]
result = solve(grades)
print "\n".join(map(str, result))