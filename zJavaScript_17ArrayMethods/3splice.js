// MUTATING ARRAY: modifies the original array, rather than returning a new copy
// splice: add/remove items from an array
// 2 arguments: index starting point
//              number of items to remove

// remove Joe from this array
let names1 = ['Danny', 'Joe', 'Sarah', 'Molly'];
let splicedOriginalArray1 = names1.splice(1, 1);
console.log(names1);        // see the MUTATED original array
console.log(splicedOriginalArray1);  // see the SPLICED array

/* RESULT: 
[ 'Danny', 'Sarah', 'Molly' ]
[ 'Joe' ]
 */

// It's better to make a COPY of the original array and modify that instead
let names2 = ['Danny', 'Joe', 'Sarah', 'Molly'];
let initialCopy = ['Danny', 'Joe', 'Sarah', 'Molly'];     // COPY the array
splicedInitialCopy = initialCopy.splice(1, 1);                 // splice the COPY
console.log(names2);
console.log(splicedInitialCopy);    

/* RESULT: 
[ 'Danny', 'Joe', 'Sarah', 'Molly' ]
[ 'Joe' ]
 */

// Add items into the array
// replace Joe with Bill and Bob
let names3 = [ 'Danny', 'Joe', 'Sarah', 'Molly' ]
let initialCopy3 = names3.splice(1, 1, 'Bill', 'Bob');
console.log(names3);
console.log(initialCopy3);


//== you can numbers =====================================
// Splice out '2' from the array
let numbers1 = [1, 2, 3, 4];
let initialCopy2 = [1, 2, 3, 4];
splicedInitialCopy2 = initialCopy2.splice(1, 1);
console.log(initialCopy2);
console.log(splicedInitialCopy2);

/* RESULT:
[ 1, 3, 4 ]
[ 2 ] */