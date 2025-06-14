// .splice(startIndex, #ofDeletedItems)
// mutating Method
// MUTATES the ORIGINAL array by adding/removing items
// NOTE: mutating the original array adds bugs into the program. 
    // If a lot of functions use 'names', it's hard to tell what actual names are in this array 
    // FIX: create a COPY 
let names = ["Danny", "Joe", "Sarah", "Molly"];
let namesCopy = [...names];

console.log(names); // Danny, Joe, Sarah, Molly
// start from index 1. delete 1 item
namesCopy.splice(1, 1);
console.log(namesCopy); // Danny, Sarah, Molly
// start from index 1. delete 2 items, add 2 items
namesCopy.splice(1, 2, 'Bill', 'Bob');
console.log(namesCopy);
