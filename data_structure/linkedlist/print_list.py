# https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem
class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node
    
def print_list(head):
    while head != None:
        print head.data
        head = head.next
