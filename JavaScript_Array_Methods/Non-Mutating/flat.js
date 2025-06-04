// .flat()
// non-mutating Method
// returns a NEW array with the nested arrays 'flatten down' into a 1 dimensional array
    // Nested Array: the inner array is 'nested' at level 1.
    // All the other items are 'nested' at level 2

let nums = [1, 2, 3, 4, [5, 6], 7];
console.log(nums);
let flat = nums.flat();
console.log(flat.join(" "));

// to flatten deeper add a number for each level nested array
let nums2 = [1, 2, 3, 4, [5, 6, [7, 8]], 9];
console.log(nums2);
let flat2 = nums2.flat(2);
console.log(flat2.join(" "));
