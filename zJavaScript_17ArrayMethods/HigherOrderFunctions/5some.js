// some: BOOLEAN 
// Check if 'some' of the items meet the given condition in the callback function

let nums = [1, 2, 3, 4, 5, 6];

let greaterThanFour = nums.some(num => num > 4);
console.log(greaterThanFour);