# https://practice.geeksforgeeks.org/problems/find-k-th-character-in-string/0#ExpectOP
# m = 5
# k = 5
# n = 3

# m = 11
# k = 6
# n = 4

T = int(input())
for time in range(T):
    arr_input = list(map(int, input().split(" ")))
    m = arr_input[0]
    k = arr_input[1]
    n = arr_input[2]

    bin_m = bin(m)[2:]
    i = 1
    while i <= n:
        temp = []
        for j in range(len(bin_m)):
            if bin_m[j] == "0":
                temp.append("01")
            else:
                temp.append("10")
        bin_m = "".join(temp)
        i = i + 1

    print(bin_m[k])
