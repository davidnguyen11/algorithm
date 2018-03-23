# https://www.hackerrank.com/challenges/funny-string/problem
def funnyString(s):
    rs = s[::-1]
    n = len(s)
    valid = True
    result = 'Funny'

    for i in range(1, n):
        s_i = ord(s[i])
        s_i1 = ord(s[i - 1])

        rs_i = ord(rs[i])
        rs_i1 = ord(rs[i - 1])

        if abs(s_i - s_i1) != abs(rs_i - rs_i1):
            result = 'Not Funny'
            break

    return result

q = int(raw_input().strip())
for a0 in xrange(q):
    s = raw_input().strip()
    result = funnyString(s)
    print(result)
