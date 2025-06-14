// .filter()
// non-mutating Method
// loops through the array and creates a new array for ALL the elements that match the condition in the callback

let posts = [
  { title: "post1", author: "Dan" },
  { title: "post2", author: "Dan" },
  { title: "post3", author: "Sarah" },
];

let total = posts.filter((p) => p.author === "Dan");
console.log("total: ", total);
// total: [
//    { title: 'post1', author: 'Dan' },
//    { title: 'post2', author: 'Dan' }
// ]

// =============================================================================
// .find()
// non-mutating Method
// find array items based on the callback conditional statement
// NOTE: .find() only returns the FIRST element that meets the condition.
// use .filter() to match ALL elements

let stock = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 },
];

let result = stock.find((s) => s.quantity > 10);
console.log("result: ", result); // result:  { item: 'ketchup', quantity: 32 }

// =============================================================================
//findIndex(): similar to find()
// non-mitigating Method
// find array item's INDEX based on the callback conditional statement
// different from indexOf or lastIndexOf Methods, has to be a function
let index = stock.findIndex((s) => s.item === "mayo");
console.log("index: ", index); // index:  1
