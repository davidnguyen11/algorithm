def search(keyword, origin_text, suffixed_array, n):
    left = 0
    right = n - 1

    while left <= right:
        mid = left + (right - left) / 2
        
def compare_string(item1, item2):
    if item1['suff'] < item2['suff']:
        return -1
    else:
        return 1

def build_suffix_array(text, n):
    suffixes = []
    for i in range(n):
        temp = {}
        temp['index'] = i
        temp['suff'] = text[i:n]
        suffixes.append(temp)
    suffixes.sort(compare_string)

    result = []
    for item in suffixes:
        result.append(item['index'])
    return result

txt = 'banana'
n = len(txt)
print build_suffix_array(txt, n)
