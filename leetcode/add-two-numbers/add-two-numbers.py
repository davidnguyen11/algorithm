'''
* URL: https://leetcode.com/problems/add-two-numbers/submissions/
* Idea:
** 1. Convert the linked list to number
** 2. Sum numbers
** 3. Convert the sum back to linked list
'''
class ListNode(object):
  def __init__(self, x):
      self.val = x
      self.next = None

class Solution(object):
  def convertListToNum(self, node):
    temp = ''
    head = node

    while head:
      temp = str(head.val) + temp
      head = head.next

    return int(temp)

  def addTwoNumbers(self, l1, l2):
    num1 = self.convertListToNum(l1)
    num2 = self.convertListToNum(l2)
    temp = num1 + num2
    result = None
    head = None

    for i in str(temp):
      node = ListNode(int(i))
      if not result:
        result = node
        head = result
      else:
        tempNode = node
        tempNode.next = head
        head = tempNode
    
    result = head

    return result


l1 = ListNode(3)
l1.next = ListNode(4)
l1.next.next = ListNode(2)

l2 = ListNode(4)
l2.next = ListNode(6)
l2.next.next = ListNode(5)

# l1 = ListNode(2)
# l1.next = ListNode(4)
# l1.next.next = ListNode(3)

# l2 = ListNode(5)
# l2.next = ListNode(6)
# l2.next.next = ListNode(4)

solution = Solution()
l = solution.addTwoNumbers(l1, l2)

while l:
  print l.val
  l = l.next
