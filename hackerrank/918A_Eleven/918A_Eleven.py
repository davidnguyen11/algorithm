# http://codeforces.com/problemset/problem/918/A
# using dynamic programming to calculate fibonaci number
# store value calculated in dictionary (1)
# loop n, each i-th check i-th exists in (1)
# if exists => O
# otherwise => o
def fib(n):
    fibs = []
    fibs.append(0)
    fibs.append(1)

    fib_obj = {}
    fib_obj[1] = True
    fib_obj[2] = True

    for i in range(2, n + 2):
      fibs.append(fibs[i - 1] + fibs[i - 2])
      fib_obj[fibs[i - 1] + fibs[i - 2]] = True

    return fib_obj

n = int(raw_input())

fib_obj = fib(n)
result = ''

for i in range(1, n + 1):
  if (fib_obj.get(i, False)):
    result = result + 'O'
  else:
    result = result + 'o'

print result
