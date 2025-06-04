// ALL of these array methods are NON-mutating, leaving the ORIGINAL array WHOLE. console.log(items);
// .filter()  : loops through the array and creates a new array for ALL the elements that match the condition in the callback
// .forEach() : iterates the array and applies a function to each element.
// .map()     : maps the array and creates a NEW array by applying a function to EACH element
// .find()    : find a SPECIFIC array element based on the condition, else, undefined
// .reduce()  : runs a function on every element to reduce to a single value
// .some()    : BOOLEAN: Check that SOME of the elements meets the condition, stops at the first
// .every()   : BOOLEAN: Check that EVERY element meets the condition
// .includes(): BOOLEAN: check if the argument is a value in an array

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
console.log('items array: ', items);
//=======================================================================
// .filter(): loops through the array and creates a new array for ALL the elements that match the condition in the callback
filteredItems = items.filter((item) => {
  return item.price <= 100;
});
/* console.log('filter(): ', filteredItems); */

// more concise
filteredItems2 = items.filter((item) => item.price <= 100);
console.log('filter2(): ', filteredItems2);

//======================================================================
//forEach() good for logging : if you need a return value, use .map()
const noValue = items.forEach((item) => console.log('forEach(): ', item.name, item.price));
console.log('forEach(): ', noValue); // undefined

// =====================================================================
// .map()
// the NEW array is a MODIFIED array of ONLY the item prices!!
const mappedItems = items.map((item) => item.price);
console.log('map(): ', mappedItems);

// =====================================================================
//.find()
// find SPECIFIC array element based on the condition, else, undefined
const foundItem = items.find((item) => item.name === "TV");
console.log('find(): ', foundItem);

// find and return an array item:
const foundItem2 = items[2];
console.log("find(): ", foundItem2);

//======================================================================
// .reduce()
// 3 parameters, 1 condition
// runs a function on every element to reduce to a single value
// 3rd parameter: the starting total of the 1st parameter: currentTotal = 0
// 1st parameter: whatever the previous iteration returned
// 2nd parameter: the iterated item of the array

const total = items.reduce(
    (currentTotal, item) => item.price + currentTotal,
    0
  );
  console.log('reduce(): ', total); // 1840

//======================================================================
// .some()
// BOOLEAN. Check that SOME of the items meets the condition
const hasInexpensiveItems = items.some((item) => item.price <= 100);
console.log('some(): ', hasInexpensiveItems); // true, the array DOES have Inexpensive items

//======================================================================
//.every()
// BOOLEAN. Check EVERY item meets the condition
const hasInexpensiveItems2 = items.every((item) => item.price);
console.log('every(): ', hasInexpensiveItems)

//======================================================================
// .includes()
// 1 parameter, no conditions
// BOOLEAN: takes a single argument, check if the argument is a value in an array
// Good to QUICKLY without having to use a complex find()
const nums = [1, 2, 3, 4, 5];
const isIncluded = nums.includes(7);
console.log('includes():', isIncluded); // false

//======================================================================
