import { Array } from "./array";

const array = new Array();
array.push("first item");
array.push("second item");
array.push("third item");

array.delete(1);
console.log(array);
