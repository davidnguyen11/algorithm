# https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node

def Insert(head, data):
    if not head:
        head = Node(data)
    else:
        current_node = Node(data)
        last = head
        while last != None:
            if last.next == None:
                last.next = current_node
                break
            last = last.next
    return head
