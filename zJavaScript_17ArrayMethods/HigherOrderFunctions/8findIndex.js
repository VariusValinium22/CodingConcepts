// findIndex:
// find the index of a given string or number
let nums = [1, 2, 3, 4, 5, 6];
indexOfThree2 = nums.indexOf(3);
console.log(indexOfThree2);

// use .findIndex() to use a callback function
indexOfThree = nums.findIndex((num) => num === 3);
console.log(indexOfThree);

//=== USING STRINGS ========================================
let stock = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "mustard", quantity: 12 },
];

// find the property of an object
let findMayoIndex = stock.findIndex((s) => s.item === "mayo");
console.log(findMayoIndex);

// return items by index number
let itemAtIndex1 = [stock[2], stock[1]];
console.log(itemAtIndex1);
