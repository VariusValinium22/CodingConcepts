// .forEach() and forLoop: Higher Order Functions
// non-mutating Method (but CAN MODIFY object elements INSIDE the array)
// forEach loops over each array item and calls a callback function each time

// for custom control use standard forLoop

//====================================================================
// forEach()
// loops over each array item and applies a callback function
// this function ONLY logs the uppercase words and gives a count, it does not UPDATE the original array
let names = ["Danny", "Joe", "Sarah", "Molly", "Joe"];
let count = 0;
console.log('====== ForEach: only logs each iterated element from the array ========')
names.forEach((n) => {
  console.log(n.toUpperCase()); // returns each iteration of a capitalized element
  count++;
});

console.log('returns the ORIGINAL array, names: ', names); // returns the original array
console.log("count: ", count); // returns the count of array elements
console.log('returns ORIGINAL array with spaces, names: ', names.join(" ")); // returns the ORIGINAL array changed to have spaces
console.log('');

// === MUTATES the original Array ======================================
// This function DOES MUTATE the original array
console.log("// ====== MUTATE EVERY ELEMENT: forEach =====");

names.forEach((word, index, array) => {
  array[index] = word.toUpperCase();
});
console.log('mutated array to uppercase using forEach, names: ', names); // returns the ORIGINAL array with chnanges
console.log('');
// =====================================================================
// forLoop
// for custom control, use a standard forLoop.
// It can mutate arrays!!!
// Change the starting index to 2. This will grab Sarah at index2.
// Change i++ to i = i + 2. This will skip 2 indices and grab ONLY Joe.
console.log("// ======= MUTATE EVERY ELEMENT: forLoop =====");
result = "";
// this only modifying a separate string of result
for (let i = 0; i < names.length; i++) {
  result += names[i].toLowerCase() + " ";
}
console.log("Just a separate string, result: ", result);

// this function modifies the array
for (let i = 0; i < names.length; i++) {
  names[i] = names[i].toLowerCase();
}
console.log('mutated array to lowercase using forLoop, names: ', names); // now in lower case

let result2 = "";
for (let i = 2; i < names.length; i = i + 2) {
  result2 += names[i] + " ";
}
console.log('Skipping elements to log them , result2: ', result2); // Sarah Joe
console.log('');

// ==========================================================
console.log('===== MUTATE AN OBJECT PROPERTY: forEach ======');
let users = [
    { name: "Alice", active: false },
    { name: "Bob", active: false }
];

console.log('ORIGINAL array of users: ', users);

users.forEach(user => user.active = true); // This mutates the original objects
console.log('MUTATED  array of users: ', users);
