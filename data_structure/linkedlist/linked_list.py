from compare_2_list import compare_2_list

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
        if not self.head:
            self.head = Node(data)
        else:
            count = 0
            new_node = Node(data)

            if position == 0:
                new_node.next = self.head
                self.head = new_node
                return

            prev_node = self.head
            while prev_node.next != None:
                if count == position - 1:
                    break
                count = count + 1
                prev_node = prev_node.next

            new_node.next = prev_node.next
            prev_node.next = new_node

    def delete(self, position):
        if not self.head.next:
            self.head = None
            return
        else:
            if position == 0:
                self.head = self.head.next
                return

            count = 0
            temp = self.head
            while temp:
                if count == position - 1:
                    break
                count = count + 1
                temp = temp.next

            temp.next = temp.next.next

    def get_node(self, position):
        arr = []
        temp = self.head
        while temp:
            arr.append(temp.data)
            temp = temp.next

        length_arr = len(arr)
        last_index = length_arr - 1
        return arr[last_index - position]

llist = LinkedList()
llist.add_tail(2)
llist.add_tail(3)
llist.add_tail(5)
# print llist.get_node(1)
# llist.insert_n_th(3, 0)
# llist.insert_n_th(5, 1)
# llist.insert_n_th(4, 2)
# llist.insert_n_th(2, 3)
# llist.insert_n_th(10, 1)
# llist.delete(0)
# llist.print_list()

# llistA = LinkedList()
# llistA.add_tail(1)
# llistA.add_tail(2)

# llistB = LinkedList()
# llistB.add_tail(1)
# llistB.add_tail(2)

# print compare_2_list(llistA.head, llistB.head)
