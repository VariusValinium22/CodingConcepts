// sort:
// sort the items as 'strings' in an array. Numbers are changed to strings.

let nums = [2, 6, 4, 5, 30, 1];
// sorts the strings char by char. 30 is before 4(not judged to be 30 > 4) 
let numSort = nums.sort();
console.log("30 is before 4(not judged to be 30 > 4)", numSort);

// use COMPARE FUNCTION for ascending order
// nums.sort((first, second) => first - second);
// if a - b < 0, then a comes before b
// Example Iteration: 2 - 4 = -2 → so 2 comes before 4
let numSort2 = nums.sort((a, b) => a - b);
console.log(numSort2);

// use compare function for descending order
// if b - a > 0, then b comes before a
// Example Iteration: 4 - 2 = 2  → so 4 comes before 2
let numSort3 = nums.sort((a, b ) =>  b - a);
console.log(numSort3);

//==== USING STRINGS ==============================
// return the items of an array in alphabetical order
let names1 = ["Danny", "Joe", "Sarah", "Molly", "molly", "Billy"];

// ASCENDING
// by default 'sort' by Unicode values, upper before lower case. 'molly is at the end'
let alpha = names1.sort();
console.log("Default sort: ", alpha);

// case-sensitive sort
/* let alpha2 = names1.sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
); */
let alpha2 = names1.sort((a, b) => 
    a.localeCompare(b, undefined, { sensitivity: 'base'})
);
console.log("Proper ASC order: ", alpha2);

// DESCENDING
// When two strings like "Molly" and "molly" are equal in lowercase,
// and do not change spots in the array 
//      .sort() makes them fall back to their original Unicode values.
let alpha3 = names1.sort((a, b) => 
    b.toLowerCase().localeCompare(a.toLowerCase())
);
console.log("DESC sort: ", alpha3);

// FIX: Use localeCompare with sensitivity: 'base',
// 'Molly' and 'molly' still hasn't changed spots.
let alpha4 = names1.sort((a, b) => 
    b.localeCompare(a, undefined, { sensitivity: 'base'})
);
console.log("Proper DESC sort: ", alpha4);

// to TRULY reverse the alpahbetical order, 
// use a spread syntax [...alpha2] and .reverse
let reversedAlpha2 = [...alpha2].reverse();
console.log("TRULY Reversed sort: ", reversedAlpha2);



