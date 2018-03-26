# https://www.hackerrank.com/challenges/waiter/

# f  = open('input', 'r')
# line = f.readline().strip().split(' ')
# n = int(line[0])
# q = int(line[1])

# number = list(map(int, f.readline().strip().split(' ')))
# f.close()

n, q = raw_input().strip().split(' ')
n, q = [int(n), int(q)]
number = map(int, raw_input().strip().split(' '))

def is_prime(n):
    if n <= 1:
        return False
    elif n <= 3:
        return True
    elif n % 2 == 0 or n % 3 == 0:
        return False
    i = 5

    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i = i + 6
    return True

def get_prime(q):
    result = []
    i = 1
    count = 0
    while i <= 1e4:
        if count == q:
            break
        if is_prime(i):
            result.append(i)
            count = count + 1
        i = i + 1
    return result

prime_numbers = get_prime(q)

A = {
    0: number
}

B = {
    1: []
}

for i in range(1, q + 1):
    if not A.get(i - 1, False):
        A[i - 1] = []
    if not B.get(i, False):
        B[i] = []

    prime = prime_numbers[i - 1]

    while len(A[i - 1]) > 0:
        top = A[i - 1].pop()
        if top % prime == 0:
            B[i].append(top)
        else:
            if not A.get(i, False):
                A[i] = []
            A[i].append(top)

for i in range(1, q + 1):
    while len(B[i]) > 0:
        print B[i].pop()

if A.get(q, False):
    while len(A[q]) > 0:
        print A[q].pop()