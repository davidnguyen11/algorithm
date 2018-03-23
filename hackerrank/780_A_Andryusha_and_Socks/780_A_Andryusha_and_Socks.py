# http://codeforces.com/problemset/problem/780/A
# 2 1 1 3 2 3 => 2
# 1 1 => 1
# 2 1 3 2 1 3 => 3

n = int(raw_input())
socks = map(int, raw_input().strip().split(' '))[::-1]

table = {}
max_socks = 0

sock = socks.pop()
table[sock] = True
max_socks = max(max_socks, len(table))

while len(socks) > 0:
    sock = socks.pop()
    if table.get(sock, False):
        del table[sock]
    else:
        table[sock] = True
    max_socks = max(max_socks, len(table))

print max_socks
