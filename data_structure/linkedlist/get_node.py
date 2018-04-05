def get_node(head, position):
    arr = []
    temp = head
    while temp:
        arr.append(temp.data)
        temp = temp.next

    length_arr = len(arr)
    last_index = length_arr - 1
    return arr[last_index - position]