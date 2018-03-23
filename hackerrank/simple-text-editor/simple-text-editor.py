# https://www.hackerrank.com/challenges/simple-text-editor/problem

# f  = open('input', 'r')
# n = int(f.readline())
# operations = []
# for line in f.readlines() :
#     operations.append(line.strip())
# f.close()

n = int(raw_input())
s = ''
cache = []
cache.append(s)

ACTIONS = {
    '1': 'APPEND',
    '2': 'DELETE',
    '3': 'PRINT',
    '4': 'UNDO'
}
last_index = 0

for i in range(n):
    # line = operations[i].split(' ')
    line = raw_input().split(' ')
    q = line[0]

    action = ACTIONS[q]
    if action != 'UNDO' and action != 'PRINT':
        content = line[1]
        if action == 'APPEND':
            s = s + content
        elif action == 'DELETE':
            keep_length = len(s) - int(content)
            s = s[0:keep_length]
        cache.append(s)
        last_index = len(cache) - 2

    if action == 'UNDO':
        s = cache[last_index]
        cache.pop()
        last_index = last_index - 1
    elif action == 'PRINT':
        k = int(line[1]) - 1
        print s[k]
