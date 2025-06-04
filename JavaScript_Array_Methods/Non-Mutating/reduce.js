// .reduce(total, currentvalue);
// non-mutating Method
// reduce an array DOWN to a single value
    // the 1st parameter's value: 1
    // the 2nd parameter's value: 2
    // (optional) 3rd parameter indicates a starting value: 10
// these values are placed into the callback
// the answer: 3, replaces 'total' on every new iteration of the remaining items

let nums = [1, 2, 3, 4, 5, 6];

let total = nums.reduce((total, currentVal) => total + currentVal);

console.log(total); // 21

// 3rd parameter indicates a starting value
let total2 = nums.reduce((total, currentVal) => total + currentVal, 10);
console.log(total2); // 31

// 10 + 1 = 11
// 11 + 2 = 13
// 13 + 3 = 16
// 16 + 4 = 20
// 20 + 5 = 25
// 25 + 8 = 31

// USE CASE: Find the max value in an array
// -Infinity: the smallest posible number you can imagine
// Math.max compares a against b for which ever is larger
// without using sort()
let maxValue = nums.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(maxValue); // 6

