// const arr = [3, 4, 7, 1, 2, 9, 8];

import { BinarySearchTree, traverse } from "./dataStructures/binarySearchTree";
import { LinkedList } from "./dataStructures/linkedList";
import { Queue } from "./dataStructures/queue";

// const array = new Array();
// array.push("first item");
// array.push("second item");
// array.push("third item");

// array.delete(1);
// console.log(array);

// const ht = new Map();

// ht.set("Spain", 110);
// ht.set("ǻ", 192);

// console.log(ht.get("Spain")); // [ 'ǻ', 192 ]
// console.log(ht.get("ǻ")); // [ 'ǻ', 192 ]

// import { HashTable } from "./dataStructures/hashTable";

// const hashTable = new HashTable(50);
// hashTable.set("amin", 7);
// hashTable.set("amin", 2);
// hashTable.set("gholam", 22);
// console.log(hashTable.keys());

// const testArr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// function ads(input) {
//   let map = {};
//   for (let i = 0; i < input.length; i++) {
//     if (map[input[i]]) {
//       return input[i];
//     } else {
//       map[input[i]] = 1;
//     }
//     console.log(map);
//   }
// }

// console.log(ads(testArr));

// const linkedList = new LinkedList(10);
// linkedList.append(5);
// linkedList.append(18);
// linkedList.append(21);
// linkedList.prepend(-222);
// linkedList.printList();
// linkedList.insert(2, 1234);
// linkedList.insert(4, 54231);
// linkedList.remove(2);
// linkedList.reverse();
// linkedList.printList();

// const stack = new LinkedListStack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack);
// stack.pop();

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();
// queue.dequeue();
// // queue.dequeue();
// console.log(queue);

const BST = new BinarySearchTree();
BST.insert(9);
BST.insert(4);
BST.insert(6);
BST.insert(20);
BST.insert(170);
BST.insert(15);
BST.insert(1);

console.log(traverse(BST.root));
// const findRes = (arr) => {
//   let map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const sum = arr[i] + arr[j];
//       if (!map.has(sum)) {
//         map.set(sum, [i, j]);
//       } else {
//         const pp = map.get(sum);
//         return arr[pp[0]] + " " + arr[pp[1]] + " " + arr[i] + " " + arr[j];
//       }
//     }
//     console.log(map);
//   }
//   return undefined;
// };

// console.log(findRes(arr));
