// "find the TOTAL of all of the items in the Array"
// reduce: reduce 'reduces' and returns just ONE result
// the whole reduce() is considered a Callback Function
// Example: let total = nums.reduce((accumulator, currentValue) => {callBackFunctionBody});
let nums = [1, 2, 3, 4, 5, 6];

let total = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(total);

// one-liner
let total2 = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total2);


// start from 10 placed in the accumulator property
let total3 = nums.reduce((acc, curr) => acc + curr, 10);
console.log(total3);

// Often used to find the MAX value in an array
let total4 = nums.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(total4);

// Often used to find the MIN value in an array
let total5 = nums.reduce((a, b) => Math.min(a, b), Infinity);
console.log(total5);

//===== USING STRINGS ===================================================================
let words1 = ['I', 'love', 'JavaScript'];

// reduce the array to a single string
let sentence1 = words1.reduce((acc, word) => {
  return acc + ' ' + word;
}, '');
console.log(sentence1); // "I love JavaScript"
// same
let sentence2 = words1.reduce((acc, word) => acc + ' ' + word );
console.log(sentence2);

// find the first alphabetical word in the array
let fruit = ['apple', 'banana', 'zuccini', 'kiwi'];
// only leave out '' or 'zzz' if you know your array will have at least one item
// otherwise, you will get this error: 
//         TypeError: Reduce of empty array with no initial value
let minWord1 = fruit.reduce((a, b) => a < b ? a : b);
console.log(minWord1);
// alternative:
let minWord2 = fruit.reduce((a, b) => a.localeCompare(b) < 0 ? a : b);
console.log(minWord2);
// find the last alphabetical word in the array
let maxWord1 = fruit.reduce((a, b) => a > b ? a : b);
console.log(maxWord1);
// alternative:
let maxWord2  = fruit.reduce((a, b) => a.localeCompare(b) > 0 ? a : b);
console.log(maxWord2);
