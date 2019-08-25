package main

import "fmt"

type Node struct {
	data int
	next *Node
}

type LinkedList struct {
	head *Node
	tail *Node
}

func (list *LinkedList) AddFirst(data int) {
	node := &Node{data, nil}

	if list.head == nil {
		list.head = node
	} else {
		node.next = list.head
		list.head = node
	}
}

func (list *LinkedList) AddLast(data int) {
	node := &Node{data, nil}

	if list.head == nil {
		list.head = node
	} else {
		head := list.head
		for head.next != nil {
			head = head.next
		}
		if head != nil {
			head.next = node
			node.next = nil
		}
	}
}

func (list *LinkedList) Add(position int, data int) {
	head := list.head

	if position == 0 {
		list.AddFirst(data)
	} else {
		index := 0
		prev := head
		for head != nil {
			if index == position {
				break
			}
			prev = head
			head = head.next
			index++
		}
		nextNode := prev.next
		head := prev
		node := &Node{data, nil}

		node.next = nextNode
		head.next = node
	}
}

func (list *LinkedList) Remove(position int) {
	head := list.head

	if position == 0 {
		list.head = head.next
	} else {
		index := 0
		prev := head
		for head != nil {
			if index == position {
				break
			}
			prev = head
			head = head.next
			index++
		}
		nextNode := head.next
		head = prev
		head.next = nextNode
	}
}

func (list *LinkedList) GetFirst() *Node {
	if list.head == nil {
		return nil
	}
	return list.head
}

func (list *LinkedList) GetLast() *Node {
	head := list.head
	if head == nil {
		return nil
	}

	for head.next != nil {
		head = head.next
	}
	return head
}

func (list *LinkedList) Get(position int) *Node {
	head := list.head
	if head == nil {
		return nil
	}

	if position == 0 {
		return head
	}

	count := 0

	for head != nil && count != position {
		head = head.next
		count++
	}

	if head == nil {
		return nil
	}
	return head
}

func (list *LinkedList) Size() int {
	head := list.head
	if head == nil {
		return 0
	}
	count := 0
	for head != nil {
		count++
		head = head.next
	}
	return count
}

func (list *LinkedList) ToArray() []*Node {
	head := list.head
	var arr []*Node
	if head == nil {
		return arr
	}

	for head != nil {
		arr = append(arr, head)
		head = head.next
	}
	return arr
}

func (list *LinkedList) ShowAllNodes() {
	head := list.head
	for head != nil {
		fmt.Println(head.data)
		head = head.next
	}
}

func main() {
	list := LinkedList{}
	list.AddFirst(1)
	list.AddFirst(2)
	list.AddFirst(3)

	list.AddLast(4)

	list.Add(4, 5)

	list.Remove(3)

	first := list.GetFirst()
	last := list.GetLast()
	node := list.Get(3)

	totalNodes := list.Size()
	fmt.Println("total nodes", totalNodes)

	fmt.Println("first first", first.data)
	fmt.Println("last last", last.data)
	fmt.Println("get 0", node)

	arr := list.ToArray()
	for i := 0; i < len(arr); i++ {
		fmt.Println("arr", arr[i].data)
	}

	list.ShowAllNodes()
}
