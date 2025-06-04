// Question 20: Find the product of all numbers in an array
// Example Input: [1, 2, 3, 4]
// Expected Output: 24

const numbers = [1, 2, 3, 4]; // You can modify this array for testing

// 1️⃣ Arrow function (one-liner)
const product1 = arr => arr.reduce((total, num) => total * num, 1);


// Explanation:
// The reduce() method iterates through the array, multiplying each element to the accumulated total.
// The initial value is set to 1 to ensure correct multiplication.
// This ensures that all elements are multiplied together correctly, returning the product.
// The alternative arrow function format (product1Alt) explicitly includes a return statement but behaves the same way.
