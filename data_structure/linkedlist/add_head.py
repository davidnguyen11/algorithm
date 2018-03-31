# https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list
class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node

def Insert(head, data):
    current_node = Node(data)
    current_node.next = head
    head = current_node
    return head
