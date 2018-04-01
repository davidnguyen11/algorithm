# https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem

class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node

def Delete(head, position):
    if not head.next:
        head = None
        return head
    else:
        if position == 0:
            head = head.next
            return head

        count = 0
        temp = head
        while temp:
            if count == position - 1:
                break
            count = count + 1
            temp = temp.next

        temp.next = temp.next.next

    return head