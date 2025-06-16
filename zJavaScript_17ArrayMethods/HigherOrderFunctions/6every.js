// every: BOOLEAN
// Check if 'every' item meets the given condition in the callback function
let nums = [1, 2, 3, 4, 5, 6];

let allNumsGreaterThanFour = nums.every(num => num > 0);
console.log(allNumsGreaterThanFour);