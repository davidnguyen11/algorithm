# Cho 1 mang s. Tim ra chieu dai lon nhat cua mang con sao cho + 2 phan tu bat ki ko chia het cho so k

n = 4
k = 3
a = [1, 7, 2, 4]


count = 1
i = 0
j = 1

while j < n:
  temp = a[i] + a[j]
  if temp % k != 0:
    count = count + 1
    i = i + 1
    j = j + 1
  else:
    j = j + 1

print count