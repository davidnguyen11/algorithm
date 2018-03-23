# http://codeforces.com/problemset/problem/837/A

n = input()
s = raw_input()

count = 0
max_val = 0

for i in range(n):
  if s[i] == s[i].upper() and s[i] != ' ':
    count = count + 1
    max_val = max(max_val, count)
  elif s[i] == ' ':
    count = 0

print max_val
