# https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
# input
# 3 0
# 5 1
# 4 2
# 2 3
# 10 1
# => 3 10 5 4 2
class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node

def InsertNth(head, data, position):
    if not head:
        return Node(data)

    if position == 0:
        new_node = Node(data)
        new_node.next = head
        head = new_node
        return head

    count = 0
    new_node = Node(data)
    prev_node = head

    while prev_node.next:
        if count == position - 1:
            break
        count = count + 1
        prev_node = prev_node.next

    new_node.next = prev_node.next
    prev_node.next = new_node
  
    return head