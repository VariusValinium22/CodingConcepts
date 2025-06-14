// Question 17: Reverse the elements in an array
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: [5, 4, 3, 2, 1]

const numbers = [1, 2, 3, 4, 5]; // You can modify this array for testing

// 1️⃣ Arrow function (one-liner)
const reverseArray1 = (arr) => [...arr].reverse();

// Explanation:
// The reverse() method reverses the order of elements in an array.
// Using [...arr] ensures that we do not modify the original array, returning a new reversed array.
// This approach maintains functional programming principles by avoiding mutation.