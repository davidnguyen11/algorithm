# https://www.hackerrank.com/challenges/sherlock-and-array/submissions/code/66569742

def solve(a):
    if len(a) == 1:
        return 'YES'

    valid = False
    total = sum(a)
    left_sum = 0
    for i in range(1, len(a)):
        left_sum = left_sum + a[i-1]
        right_sum = total - left_sum - a[i]

        if left_sum == right_sum:
            valid = True
            break

    if valid:
        return 'YES'
    else:
        return 'NO'


T = int(raw_input().strip())
for a0 in xrange(T):
    n = int(raw_input().strip())
    a = map(int, raw_input().strip().split(' '))
    result = solve(a)
    print(result)
