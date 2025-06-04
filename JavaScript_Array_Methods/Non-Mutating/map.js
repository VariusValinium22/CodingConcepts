// .map()
// non-mutating Method
// Creates a NEW array by looping over each array item(n) and 
    // running the callback function on each item(n * 2)


let nums = [1, 2, 3, 4, 5, 6];

let result = nums.map((n) => n * 2);

console.log(result); // 2, 4, 6, 8, 10, 12
