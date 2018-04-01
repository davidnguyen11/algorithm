def compare_2_list(headA, headB):
    itA = headA
    itB = headB
    valid = 1
    while itA or itB:
        if (not itA and itB) or (itA and not itB):
            return 0
        if itA.data != itB.data:
            valid = 0
            break
        itA = itA.next
        itB = itB.next

    return valid
