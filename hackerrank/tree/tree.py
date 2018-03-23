class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class Tree:
    def create_node(self, data):
        return Node(data)

    def insert(self, node, data):
        if node is None:
            return self.create_node(data)
        if node.data > data:
            node.left = self.insert(node.left, data)
        if node.data < data:
            node.right = self.insert(node.right, data)
        return node

    def in_order(self, root):
        if root is not None:
            self.in_order(root.left)
            print root.data,
            self.in_order(root.right)

    def post_order(self, root):
        if root is not None:
            self.post_order(root.left)
            self.post_order(root.right)
            print root.data,

def main():
    root = None
    tree = Tree()
    root = tree.insert(root, 2)
    print root.data
    tree.insert(root, 1)
    tree.insert(root, 3)

main()
