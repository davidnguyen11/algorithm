# https://www.hackerrank.com/challenges/sparse-arrays/problem

n = int(raw_input())
templates = []
for i in range(n):
    temp = raw_input()
    templates.append(temp)

q = int(raw_input())
query_string = []
for i in range(q):
    temp = raw_input()
    query_string.append(temp)

for out in query_string:
    count = 0
    for item in templates:
        if out == item:
            count = count + 1
    print count
