n = 10
arr = map(int, '-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854'.strip().split(' '))

arr.sort()

print arr

min_diff = arr[0] - arr[1]

for i in range(n - 1):
    if arr[i] - arr[i + 1] < min_diff:
        min_diff = arr[i] - arr[i + 1]

print min_diff
