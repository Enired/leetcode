// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const addTwoNumbers = (l1, l2) => {
  //Reverse each list'
  //concat all items in the list
  // add the lists together
  // convert each number to list
  // reverse the list


  const head = new ListNode();
  let tail = head
  let carry = 0;

  while(l1 || l2 || carry){
    const valueOne = l1 ? l1.val : 0;
    const valueTwo = l2 ? l2.val : 0;
    const total = valueOne + valueTwo + carry

    tail.next = new ListNode(total%10);
    tail = tail.next
    carry = total >= 10 ? 1 : 0;
    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }

  return head.next;


  // const valOne = parseInt(l1.reverse().join(''));
  // const valTwo = parseInt(l2.reverse().join(''));

  // const total = valOne + valTwo;
  // const returnedArray = Array.from(String(total), Number).reverse();
  // return returnedArray;
};

// l1 = [2, 4, 3];
// l2 = [5, 6, 4];

// console.log('Expected Answer = [7,0,8]');
// console.log('Functions\'s Answer = ', addTwoNumbers(l1, l2));
