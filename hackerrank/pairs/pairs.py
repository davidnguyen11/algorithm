# https://www.hackerrank.com/challenges/pairs/problem
def pairs(a, k):
    dict_arr = {}
    answer = 0
    for val in a:
        dict_arr[val] = True

    for item in a:
        if dict_arr.get(item + k, False):
            answer = answer + 1
    return answer

# Tail starts here
if __name__ == '__main__':
    a = map(int, raw_input().strip().split(" "))
    _a_size=a[0]
    _k=a[1]
    b = map(int, raw_input().strip().split(" "))
    print pairs(b,_k)

# JS solution
# var i=0,j=1,count=0;
#
# while(j < n) {
#     var diff = nums[j] - nums[i];
#
#     if (diff == k) {
#         count++;
#         j++;
#     } else if (diff > k) {
#         i++;
#     } else if (diff < k) {
#         j++;
#     }
# }
