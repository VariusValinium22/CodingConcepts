// find:
// 'find' the given Number
let nums = [100, 200, 300, 400, 500];
let findNum = nums.find((num) => num === 400);
console.log(findNum);

// find the given String
let words = ["apple", "banana", "zuccini", "kiwi"];
let findWord = words.find((word) => word === "banana");
console.log(findWord);

// find the property of an object
let stock = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "mustard", quantity: 12 },
];

let findWord2 = stock.find(word => word.quantity > 15);
console.log(findWord2);
console.log(findWord2.quantity);