# https://www.hackerrank.com/challenges/maximum-element/problem

n = int(raw_input())

TYPES = {
    'PUSH': 1,
    'DEL': 2,
    'PRINT': 3,
}
stk = []
dict_max = {}
max_val = 0

for time in range(n):
    inputs = raw_input().strip().split(' ')
    command = int(inputs[0])
    if command == TYPES['PUSH']:
        value = int(inputs[1])
        current_length = len(stk)
        temp_max = dict_max.get(current_length, 0)
        max_val = max(max_val, value)
        max_val = max(temp_max, max_val)
        stk.append(value)
        after_current_length = len(stk)
        dict_max[after_current_length] = max_val
    elif command == TYPES['DEL']:
        current_length = len(stk)
        temp_max = dict_max.get(current_length, 0)
        if temp_max != 0:
            del dict_max[current_length]
        pop_val = stk.pop()
        after_current_length = len(stk)
        max_val = dict_max.get(after_current_length, 0)
    elif command == TYPES['PRINT']:
        current_length = len(stk)
        print dict_max[current_length]
