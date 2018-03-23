# http://practice.geeksforgeeks.org/problems/start-elements/0
# n = 6
# arr = list(map(int, '4 2 5 7 2 1'.strip().split(' ')))

n = 3
arr = list(map(int, '8 6 5'.strip().split(' ')))

def solve():
    max_index = -1
    max_value = -1

    for i in range(n):
        if arr[i] > max_value:
            max_index = i
            max_value = arr[i]

    for i in range(max_index, n):
        print(arr[i], end=' ')

    if (max_index == -1)
    print()
    print(arr[max_index])
