def solve(arr, n):
    count = {}
    result = []
    arr.sort()

    for i in range(n):
        count[abs(arr[i])] = count.get(abs(arr[i]), 0) + 1

    for i in range(n):
        if (count.get(arr[i], 0) == 2):
            result.append(str(-arr[i]))
            result.append(str(arr[i]))

    if (len(result) == 0):
        return '0'
    return ' '.join(result)

t = int(input())

for i in range(t):
    n = int(input())
    arr = list(map(int, input().strip().split(' ')))
    solve(arr, n)
