// ========================================================
// ✅ NON-MUTATING ARRAY METHODS (Do Not Modify Original)
// ========================================================

const stock = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 },
];
console.log("Stock Items: ", stock);
console.log("");
// 1. map() - Get an array of item names
const itemNames = stock.map((product) => product.item);
console.log("Item Names:", itemNames);
// Output: ["ketchup", "mayo", "hot sauce"]

// 2. filter() - Get only low-stock items (less than 10)
const lowStock = stock.filter((product) => product.quantity < 10);
console.log("Low Stock Items:", lowStock);
// Output: [ { item: "mayo", quantity: 9 }]

// 3. reduce() - Get the total quantity of all items
const totalQuantity = stock.reduce((sum, product) => sum + product.quantity, 0);
console.log("Total Quantity:", totalQuantity);
// Output: 53

// 4. find() - Find the first item with quantity greater than 10
const firstOver10 = stock.find((product) => product.quantity > 10);
console.log("First item with quantity > 10:", firstOver10);
// Output: { item: "ketchup", quantity: 32 }

// 5. findIndex() - Find the index of "hot sauce"
const hotSauceIndex = stock.findIndex(
  (product) => product.item === "hot sauce"
);
console.log("Index of 'hot sauce':", hotSauceIndex);
// Output: 2

// ========================================================
// 🔹 BOOLEAN METHODS (Return true or false)
// ========================================================

const hasLowStock = stock.some((product) => product.quantity < 10);
console.log("Any item with quantity < 10?", hasLowStock);
// Output: true

const allAboveFive = stock.every((product) => product.quantity > 5);
console.log("Are all items above quantity 5?", allAboveFive);
// Output: true

const itemsArray = stock.map((product) => product.item);
console.log("Includes 'mayo'?", itemsArray.includes("mayo"));
// Output: true

// ========================================================
// 🔹 ITERATOR METHODS (Return iterators)
// ========================================================

console.log("Keys (Indexes):", [...stock.keys()]);
// Output: [0, 1, 2]

console.log("Values (Objects):", [...stock.values()]);
/* Output: [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 }
] */

console.log("Entries (Index-Value pairs):", [...stock.entries()]);
/* Output: [
  [0, { item: "ketchup", quantity: 32 }],
  [1, { item: "mayo", quantity: 9 }],
  [2, { item: "hot sauce", quantity: 12 }]
] */

// ========================================================
// 🔹 STRING CONVERSION METHODS
// ========================================================

const stockNames = ["ketchup", "mayo", "hot sauce"];
console.log("Array as String:", stockNames.toString());
// Output: "ketchup,mayo,hot sauce"

console.log("Joined Array:", stockNames.join(" | "));
// Output: "ketchup | mayo | hot sauce"

// ========================================================
// 🔹 INDEX & CONCATENATION METHODS
// ========================================================

console.log("Index of 'mayo':", stockNames.indexOf("mayo"));
// Output: 1

const moreItems = ["BBQ sauce", "mustard"];
const combinedStock = stockNames.concat(moreItems);
console.log("Concatenated Array:", combinedStock);
// Output: ["ketchup", "mayo", "hot sauce", "BBQ sauce", "mustard"]

// ========================================================
// 🔹 ITERATION METHODS (Looping Over Arrays)
// ========================================================

// 1. forEach() - Iterates through each item but does not return a new array
stock.forEach((product) =>
  console.log(`${product.item} - ${product.quantity}`)
);
/* Output:
ketchup - 32
mayo - 9
hot sauce - 12
*/

// 2. for loop - Manual iteration (similar to forEach)
for (let i = 0; i < stock.length; i++) {
  console.log(`${stock[i].item} - ${stock[i].quantity}`);
}
/* Output:
ketchup - 32
mayo - 9
hot sauce - 12
*/

// ========================================================
// ❌ MUTATING ARRAY METHODS (Modify the Original `stock`)
// ========================================================

let stockMutating = [...stock];

stockMutating.push({ item: "mustard", quantity: 15 });
console.log("After push:", stockMutating);
/* Output: [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 },
  { item: "mustard", quantity: 15 }
] */

stockMutating.pop();
console.log("After pop:", stockMutating);
/* Output: [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 }
] */

// ========================================================
// 🔹 NEWER NON-MUTATING METHODS
// ========================================================

const nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log("Flattened Array:", nestedArr.flat());
// Output: [1, 2, 3, 4, [5, 6]]

console.log(
  "FlatMapped:",
  [1, 2, 3].flatMap((num) => [num, num * 2])
);
// Output: [1, 2, 2, 4, 3, 6]

console.log("Last item using at():", stock.at(-1));
// Output: { item: "hot sauce", quantity: 12 }

console.log(
  "Sorted Copy (non-mutating):",
  stock.toSorted((a, b) => a.quantity - b.quantity)
);
/* Output: [
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 },
  { item: "ketchup", quantity: 32 }
] */

console.log("Reversed Copy (non-mutating):", stock.toReversed());
/* Output: [
  { item: "hot sauce", quantity: 12 },
  { item: "mayo", quantity: 9 },
  { item: "ketchup", quantity: 32 }
] */

console.log("Spliced Copy (non-mutating):", stock.toSpliced(1, 1));
/* Output: [
  { item: "ketchup", quantity: 32 },
  { item: "hot sauce", quantity: 12 }
] */
