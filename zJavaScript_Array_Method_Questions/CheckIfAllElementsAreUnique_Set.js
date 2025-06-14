// Question 19: Check if all elements in an array are unique
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: true
// Example Input: [1, 2, 3, 4, 1]
// Expected Output: false

const numbers = [1, 2, 3, 4, 5]; // You can modify this array for testing

// 1️⃣ Arrow function (one-liner)
const allUnique1 = (arr) => new Set(arr).size === arr.length;

// Explanation:
// The Set object stores only unique values, so converting the array to a Set removes duplicates.
// If the size of the Set matches the original array length, all elements were unique.
// Otherwise, duplicates exist in the array.