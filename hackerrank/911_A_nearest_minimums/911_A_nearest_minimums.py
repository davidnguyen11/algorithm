# http://codeforces.com/problemset/problem/911/A

n = int(raw_input())
input = raw_input()
arr = map(int, input.split(' '))

min_val_index = 0

for i in range(len(arr)):
  if arr[min_val_index] > arr[i]:
    min_val_index = i

min_count = 10e9
count = 1
for i in range(min_val_index + 1, len(arr)):
  if arr[i] == arr[min_val_index]:
    min_count = min(min_count, count)
    count = 1
  else:
    count = count + 1

print min_count