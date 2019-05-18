# https://www.hackerrank.com/challenges/missing-numbers/problem
f  = open('input2', 'r')

n = int(f.readline().strip())
arr = list(map(int, f.readline().strip().split(' ')))

m = int(f.readline().strip())
brr = list(map(int, f.readline().strip().split(' ')))

f.close()

def missingNumbers(arr, brr):
    arr_map = {}
    for i in range(len(arr)):
        if arr_map.get(arr[i], None):
            arr_map[arr[i]] = arr_map[arr[i]] + 1
        else:
            arr_map[arr[i]] = 1

    brr_map = {}
    for i in range(len(brr)):
        if brr_map.get(brr[i], None):
            brr_map[brr[i]] = brr_map[brr[i]] + 1
        else:
            brr_map[brr[i]] = 1

    visited = []
    for k in brr_map:
        if (not arr_map.get(k) or arr_map[k] < brr_map[k]):
            visited.append(k)
    return visited

print missingNumbers(arr, brr)