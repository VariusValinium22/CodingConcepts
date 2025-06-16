//toString: Turn your array of items into a string seperating the items with a comma.
let names = ["Danny", "Joe", "Sarah", "Molly"];

let stringNames1 = names.toString();
console.log(stringNames1);

// RESULT: Danny,Joe,Sarah,Molly

//join: 'joins' the array items into a string separating the items with the chosen character
let stringNames2 = names.join(" ");
console.log(stringNames2);

// RESULT: Danny Joe Sarah Molly

//== you can use numbers =====================================
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let stringNums1 = nums.toString();
console.log(stringNums1);