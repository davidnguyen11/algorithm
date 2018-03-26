class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def add_head(self, data):
        current_node = Node(data)
        current_node.next = self.head
        self.head = current_node

    def add_tail(self, data):
        if not self.head:
            self.head = Node(data)
        else:
            current_node = Node(data)
            last = self.head
            while last != None:
                if last.next == None:
                    last.next = current_node
                    break
                last = last.next

    def insert_n_th(self, data, position):
        

    def print_list(self):
        while self.head != None:
            print self.head.data
            self.head = self.head.next


llist = LinkedList()

llist.add_tail(1)
llist.add_tail(2)
llist.add_tail(3)
llist.insert_n_th(4, 1)

llist.print_list()