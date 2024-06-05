// The problem is to check if an array contains any duplicate elements.

const arr1 = ["a", "b", "a"];
const arr2 = ["hello", "bye"];

// solution 1 O(n^2)
const firstSolution = (arr) => {
  return arr.some((value, index, arr) => arr.indexOf(value) !== index);
};

// solution 2 O(n)
const secondSolution = (arr) => {
  return new Set(arr).size !== arr.length;
};

// solution 3 O(n)
function thirdSolution(arr) {
  var valuesSoFar = Object.create(null);
  for (var i = 0; i < arr.length; ++i) {
    var value = arr[i];
    if (value in valuesSoFar) {
      return true;
    }
    valuesSoFar[value] = true;
  }
  return false;
}

// solution 4 O(n^2)
function fourthSolution(arr) {
  var valuesSoFar = [];
  for (var i = 0; i < arr.length; ++i) {
    var value = arr[i];
    if (valuesSoFar.indexOf(value) !== -1) {
      return true;
    }
    valuesSoFar.push(value);
  }
  return false;
}
