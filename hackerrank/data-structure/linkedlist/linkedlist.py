class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def print_list(self):
        while self.head != None:
            print self.head.data
            self.head = self.head.next

    def add_node(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node


llist = LinkedList()

llist.add_node(1)
llist.add_node(2)
llist.add_node(3)

llist.print_list()
