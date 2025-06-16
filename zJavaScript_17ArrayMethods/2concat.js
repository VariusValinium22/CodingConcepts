//concat: combine 2 or more arrays together
let names1 = ["Danny", "Joe", "Sarah", "Molly"];
let names2 = ["John", "Tom"];
let names3 = ["Martin", "Delia"];

concatNames1 = names1.concat(names2);
console.log(concatNames1);

// RESULT: [ 'Danny', 'Joe', 'Sarah', 'Molly', 'John', 'Tom' ]

concatNames2 = names1.concat(names2, names3);
console.log(concatNames2);
/* 
RESULT: [
  'Danny',  'Joe',
  'Sarah',  'Molly',
  'John',   'Tom',
  'Martin', 'Delia'
] */


//== you can use numbers =====================================
let numbers1 = [1, 2, 3, 4];
let numbers2 = [5, 6, 7, 8];
concatNumbers = numbers1.concat(numbers2);
console.log(concatNumbers);

/* RESULT: [
  1, 2, 3, 4,
  5, 6, 7, 8
] */