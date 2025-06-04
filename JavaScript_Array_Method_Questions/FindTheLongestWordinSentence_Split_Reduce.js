// Question 21: Find the longest word in a sentence
// Example Input: "The quick brown fox jumps over the lazy dog"
// Expected Output: "jumps"

const sentence = "The quick brown fox jumps over the lazy dog"; // You can modify this sentence for testing

// 1️⃣ Arrow function (one-liner)
const findLongestWord1 = (str) => str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "");

// Explanation:
// The split(' ') method converts the sentence into an array of words.
// The reduce() method iterates through the array, comparing the length of each word.
// If a word is longer than the current longest, it replaces it.
// The final result is the longest word in the sentence.
