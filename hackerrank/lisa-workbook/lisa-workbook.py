# https://www.hackerrank.com/challenges/lisa-workbook/problem
# idea:
# create data structure using dict for work book:
# chapter 1
#### page 1: [problem1, problem2, problem3]
#### page 2: [problem4]

# chapter 2
#### page 3: [problem1, problem2]
#### page 4: [problem3]

# And then for work book from chapter => page => problem && compare problem == page
# Yes: count++
# print count

import math

input = map(int, raw_input().strip().split(' '))
n = input[0]
k = input[1]
t = map(int, raw_input().strip().split(' '))

count = 0
work_book = {}
page = 1

for i in range(n):
    work_book[i + 1] = {}

    if t[i] <= k:
        work_book[i + 1][page] = [x + 1 for x in range(t[i])]
        page = page + 1
    else:
        best_pages_fit_one_chapter = math.floor(t[i] / k)
        remain_pages = t[i] % k
        last_problem = 0

        if best_pages_fit_one_chapter > 0:
            for fit_page in range(int(best_pages_fit_one_chapter)):
                work_book[i + 1][page] = []
                for problem in range(fit_page * k + 1, fit_page * k + 1 + k):
                    last_problem = problem
                    work_book[i + 1][page].append(problem)
                page = page + 1

        if remain_pages > 0:
            for rm_page in range(remain_pages):
                work_book[i + 1][page] = [x + 1 for x in range(last_problem, t[i])]
            page = page + 1

for chapter in work_book:
    for page in work_book[chapter]:
        for problem in work_book[chapter][page]:
            if problem == page:
                count = count + 1

print count
