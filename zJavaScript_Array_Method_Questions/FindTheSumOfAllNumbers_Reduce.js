// Question 18: Find the sum of all numbers in an array
// Example Input: [10, 20, 30, 40]
// Expected Output: 100

const numbers = [10, 20, 30, 40]; // You can modify this array for testing

// 1️⃣ Arrow function (one-liner)
const sumArray1 = (arr) => arr.reduce((sum, num) => sum + num, 0);

// Explanation:
// The reduce() method iterates through the array, accumulating values.
// The (sum, num) => sum + num function adds each number to the running total.
// The initial value is set to 0, ensuring correct summation even on empty arrays.