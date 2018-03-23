def solve(arr, n):
    if n < 7:
        print 'no'
        return

    temp = ''.join(arr)
    temp = int(temp, 2)

    if temp % 64 == 0:
        print 'yes'
        return

    for i in range(n):
        if int(arr[i]) == 0:
            arr[i] = '1'
        elif int(arr[i]) == 1:
            arr[i] = '0'

        temp = ''.join(arr)
        temp = int(temp, 2)

        if temp % 64 == 0:
            print 'yes'
            break
        else:
            if int(arr[i]) == 0:
                arr[i] = '1'
            else:
                arr[i] = '0'
    print 'no'


input = raw_input()
arr = list(input)
n = len(arr)

solve(arr, n)
