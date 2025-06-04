// Question 22: Find the second largest number in an array
// Example Input: [10, 20, 4, 45, 99]
// Expected Output: 45

const numbers = [10, 20, 4, 45, 99]; // You can modify this array for testing

// 1️⃣ Arrow function (one-liner)
const secondLargest1 = (arr) => [...new Set(arr)].sort((a, b) => b - a)[1];

// Explanation:
// The new Set(arr) removes duplicate values from the array.
// The spread operator [...] converts the Set back to an array.
// The sort((a, b) => b - a) sorts the numbers in descending order.
// The second element (index 1) is returned as the second largest number.