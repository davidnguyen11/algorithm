# https://practice.geeksforgeeks.org/problems/check-if-array-contains-contiguous-integers-with-duplicates-allowed/0

T = int(input())

for i in range(T):
    n = int(input())
    data = list(map(int, input().split()))
    register = {}
    arr = []

    for i in range(len(data)):
        if not register.get(data[i], False):
            arr.append(data[i])
            register[data[i]] = True

    arr.sort()

    valid = True

    for i in range(len(arr) - 1):
        if arr[i + 1] - arr[i] > 1:
            valid = False
            break

    if valid:
        print("Yes")
    else:
        print("No")