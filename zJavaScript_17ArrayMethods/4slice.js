// NON-MUTATING: creates a new array
// slice: 'slices' out a part of the array
// 2 arguments:
//      index starting point
//      number to slice up to

// slice out Joe and Sarah
let names2 = ['Danny', 'Joe', 'Sarah', 'Molly'];
namesSliced = names2.slice(1,3);
// slice from the index starting point to the end of the array
namesSliced2 = names2.slice(1);
console.log(names2);
console.log(namesSliced);
console.log(namesSliced2);

/* RESULT: 
[ 'Danny', 'Joe', 'Sarah', 'Molly' ]
[ 'Joe', 'Sarah' ] 
[ 'Joe', 'Sarah', 'Molly' ]*/


//== you can use numbers =====================================
// Slice out '2' from the array
let numbers1 = [1, 2, 3, 4];
slicedNumbers = numbers1.slice(1,3);
console.log(numbers1);
console.log(slicedNumbers);

/* RESULTS: 
[ 1, 2, 3, 4 ]
[ 2, 3 ] */