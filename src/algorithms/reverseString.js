// reverse given string

const str = "Hello this is test string";

// The time complexity is O(n) => O(n) + O(n) + O(n)
export const reverseString = (str) => [...str].reverse().join("");
// str.split("").reverse().join("")
