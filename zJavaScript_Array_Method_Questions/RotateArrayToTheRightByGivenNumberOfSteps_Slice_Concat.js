// Question 23: Rotate an array to the right by a given number of steps
// Example Input: ([1, 2, 3, 4, 5], 2)
// Expected Output: [4, 5, 1, 2, 3]

const numbers = [1, 2, 3, 4, 5]; // You can modify this array for testing
const steps = 2; // Number of steps to rotate

// 1️⃣ Arrow function (one-liner)
const rotateRight1 = (arr, k) => arr.slice(-k).concat(arr.slice(0, -k));

// Explanation:
// The slice(-k) method extracts the last 'k' elements from the array.
// The slice(0, -k) extracts all elements except the last 'k' elements.
// The concat() method joins these two parts together, effectively rotating the array to the right.
