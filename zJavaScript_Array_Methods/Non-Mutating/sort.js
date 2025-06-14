// .sort() 
// sorts the array items alpahbetically

let names = [ "Joe", "Sarah", "Danny", "Molly",];

let alph = names.sort();
console.log(alph); // [ 'Danny', 'Joe', 'Molly', 'Sarah' ] 


// =============================================================================
// To sort numbers correctly, a compare function needs to be provided


let nums = [2, 5, 11, 8, 5];

let sorted = nums.sort();
console.log(sorted); 

// This identifies the FIRST number in double digits as '1' [ 11, 2, 5, 5, 8 ]
// FIX: if the answer in the callback is negative a - b, that means a should be placed BEFORE b, 
// keep the order of a and b 
// ...otherwise swap the order of a and b
let sorted2 = nums.sort((a, b) => a - b);
console.log(sorted2);
//  2 - 4 = -2, negative, keep order [2, 4, 11, 8, 5]
// 4 - 11 = -7, negative, keep order [2, 4, 11, 8, 5]
//  11 - 8 = 3, positive, swap order [2, 4, 8, 11, 5]
//  11 - 5 = 6, positive, swap order [2, 4, 5, 11, 8]
//  11 - 8 = 3, positive, swap order [2, 4, 5, 8, 11] FINAL sorted array.

