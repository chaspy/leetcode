class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) {
    return list2
  } else if (list2 === null) {
    return list1
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}

// Example 1:
// Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4])
// Output: [1, 1, 2, 3, 4, 4]
let list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))
console.log(mergeTwoLists(list1, list2))

// Example 2:
// Input: (list1 = []), (list2 = [])
// Output: []
list1 = new ListNode()
list2 = new ListNode()
console.log(mergeTwoLists(list1, list2))

// Example 3:
// Input: (list1 = []), (list2 = [0])
// Output: [0]
list1 = new ListNode()
list2 = new ListNode(0, null)
console.log(mergeTwoLists(list1, list2))
