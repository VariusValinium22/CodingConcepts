// Question 13: Find the longest string in an array
// Example Input: ["apple", "banana", "cherry", "watermelon"]
// Expected Output: "watermelon"

const words = ["apple", "banana", "cherry", "watermelon"]; // You can modify this array for testing

// 1️⃣ Arrow function (one-liner)
const findLongest1 = (arr) =>
  arr.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );

  