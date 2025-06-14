// Question 14: Count the occurrences of each element in an array
// Example Input: ["apple", "banana", "apple", "cherry", "banana", "apple"]
// Expected Output: { apple: 3, banana: 2, cherry: 1 }

const words = ["apple", "banana", "apple", "cherry", "banana", "apple"]; // You can modify this array for testing

// 1️⃣ Arrow function (one-liner)
const countOccurrences1 = (arr) => arr.reduce((acc, word) => (acc[word] = (acc[word] || 0) + 1, acc), {});
