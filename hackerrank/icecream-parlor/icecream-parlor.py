# https://www.hackerrank.com/challenges/icecream-parlor/problem
f  = open('input', 'r')
m = int(f.readline().strip())
n = int(f.readline().strip())
data = list(map(int, f.readline().strip().split(' ')))
f.close()

def icecreamParlor(m, a):
    cloned_a = []
    for i in range(len(a)):
        cloned_a.append(a[i])
    a.sort()

    i = 0
    j = len(a) - 1
    first = 0
    last = 0

    while i < j:
        pair_sum = a[i] + a[j]

        if a[i] + a[j] == m:
            first = a[i]
            last = a[j]
            break
        elif pair_sum < m:
            i = i + 1
        else:
            j = j - 1

    final_result = []

    for i in range(len(cloned_a)):
        if cloned_a[i] == first or cloned_a[i] == last:
            final_result.append(i + 1)
        if len(final_result) == 2:
            return final_result
    return False

print icecreamParlor(m, data)

