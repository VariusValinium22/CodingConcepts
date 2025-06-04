// Both Boolean Methods. Non-mutating

// .some()
// checks if 'some' array items pass a comparison expression.
// when the first one is found true, it returns

let nums = [1, 2, 3, 4, 5, 6];

let result = nums.some((n) => n > 6);
console.log(result) // false

// ====================================================================
//.every()
// checks if EVERY item array item passes a comparison expression.
let nums2 = [1, 2, 10, 3, 4, 5, 6];

let result2 = nums2.every((n) => n > 0);
console.log(result2); // true
