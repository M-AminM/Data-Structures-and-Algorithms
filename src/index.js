// import { Array } from "./dataStructures/array";

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

const testArr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
function ads(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = 1;
    }
    console.log(map);
  }
}

console.log(ads(testArr));
