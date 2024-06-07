// Finding first recurring character in array
// For example in this array [2,5,1,2,3,5,1,2,4] the answer is 2
/*
    [2,5,5,2,3,5,1,2,4] in this example with findFirstRecurring the answer is 2
    but with findFirstRecurring1 we get 5 and the true answer is 5
*/

// solution 1 O(n^2)
export const findFirstRecurring = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
};

// solution 2 O(n)
export const findFirstRecurring1 = (input) => {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = true;
    }
  }
  return undefined;
};
