# n = 2
# m = 3
# a = [2, 3]
# b = [16, 32, 96]

# https://www.hackerrank.com/challenges/between-two-sets?h_r=next-challenge&h_v=zen

def getTotalX(a, b):
  count = 0
  x = min(a)
  max_val = max(b)

  while x <= max_val:
    valid_a = True
    valid_b = True

    for i in range(n):
      if x % a[i] != 0:
        valid_a = False
        break

    if valid_a:
      for k in range(m):
        if b[k] % x != 0:
          valid_b = False
          break
    if valid_a and valid_b:
      count = count + 1
    x = x + 1
  return count

if __name__ == "__main__":
    n, m = raw_input().strip().split(' ')
    n, m = [int(n), int(m)]
    a = map(int, raw_input().strip().split(' '))
    b = map(int, raw_input().strip().split(' '))
    total = getTotalX(a, b)
    print total