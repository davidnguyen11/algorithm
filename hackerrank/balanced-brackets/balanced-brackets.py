# https://www.hackerrank.com/challenges/balanced-brackets

def isBalanced(s):
    s_arr = []

    s_len = len(s)
    for i in range(s_len):
        s_arr.insert(0, s[i])

    arr = []

    while len(s_arr) > 0:
        close_bracket = s_arr.pop()

        open_bracket = None
        if len(arr) > 0:
            open_bracket = arr[len(arr) - 1]

        if (open_bracket == '(' and close_bracket == ')') or (open_bracket == '[' and close_bracket == ']') or (open_bracket == '{' and close_bracket == '}'):
            arr.pop()
        else:
            arr.append(close_bracket)

    if len(arr) == 0:
        return 'YES'
    return 'NO'


if __name__ == "__main__":
    t = int(raw_input().strip())
    for a0 in xrange(t):
        s = raw_input().strip()
        result = isBalanced(s)
        print result

