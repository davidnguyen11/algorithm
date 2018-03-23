# http://algorithms.tutorialhorizon.com/introduction-to-dynamic-programming-fibonacci-series/
# https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction-to-dynamic-programming-1/tutorial/


def fib_dp(x):
    fibs = []
    fibs.append(0)
    fibs.append(1)

    for i in range(2, x + 1):
        fibs.append(fibs[i - 1] + fibs[i - 2])

    return fibs[x]

print fib_dp(1000)
