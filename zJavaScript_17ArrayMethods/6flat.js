// flat: 'flattens' or removes inner arrays 

numbers = [1, 2, 3, 4, [5, 6, 7], 8];

let flattenedArray = numbers.flat();
console.log(flattenedArray);

/* RESULT: 
[
  1, 2, 3, 4,
  5, 6, 7, 8
] */

// add the argument if you need to flatten deeper into the array
numbers2 = [1, 2, [3, [4, 5], 6, 7], 8];
let deeperFlattenedArray = numbers2.flat();
let deeperFlattenedArray2 = numbers2.flat(2);
console.log(deeperFlattenedArray);
console.log(deeperFlattenedArray2);

/* RESULT: 
[ 1, 2, 3, [ 4, 5 ], 6, 7, 8 ]
[
  1, 2, 3, 4,
  5, 6, 7, 8
] */