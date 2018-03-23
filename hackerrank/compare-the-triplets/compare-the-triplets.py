a0 = 5
a1 = 4
a2 = 7

b0 = 3
b1 = 6
b2 = 10

def solve(a0, a1, a2, b0, b1, b2):
    a = [a0, a1, a2]
    b = [b0, b1, b2]

    point_a = 0
    point_b = 0

    for i in range(3):
        if a[i] > b[i]:
            point_a = point_a + 1
        if a[i] < b[i]:
            point_b = point_b + 1
    return [point_a, point_b]

result = solve(a0, a1, a2, b0, b1, b2)
print " ".join(map(str, result))
