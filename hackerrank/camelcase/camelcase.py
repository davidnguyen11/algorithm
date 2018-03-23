#!/bin/python

import sys

alphabets = {
  'A': True,
  'B': True,
  'C': True,
  'D': True,
  'E': True,
  'F': True,
  'G': True,
  'H': True,
  'I': True,
  'J': True,
  'K': True,
  'L': True,
  'M': True,
  'N': True,
  'O': True,
  'P': True,
  'Q': True,
  'R': True,
  'S': True,
  'T': True,
  'U': True,
  'V': True,
  'W': True,
  'X': True,
  'Y': True,
  'Z': True
}

s = raw_input().strip()

count = 1
for item in s:
  if alphabets.get(item, None):
    count += 1
print count

