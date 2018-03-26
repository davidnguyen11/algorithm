# https://practice.geeksforgeeks.org/problems/non-repeating-element/0/?ref=self
T = int(input())

for i in range(T):
    n = int(input())
    data = list(map(int, input().split()))
    register = {}

    for i in range(n):
        if not register.get(data[i], False):
            register[data[i]] = 1
        else:
            register[data[i]] = register[data[i]] + 1

    existed = False
    for i in range(n):
        if register[data[i]] == 1:
            existed = True
            print(data[i])
            break

    if not existed:
        print(0)