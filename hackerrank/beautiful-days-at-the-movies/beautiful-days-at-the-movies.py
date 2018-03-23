# https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

s = raw_input()
i, j, k = s.strip().split(' ')
i = int(i)
j = int(j)
k = int(k)

count = 0

for m in range(i, j + 1, 1):
    reverse_num = int(str(m)[::-1])
    if abs(m - reverse_num) % k == 0:
        count = count + 1
print count
