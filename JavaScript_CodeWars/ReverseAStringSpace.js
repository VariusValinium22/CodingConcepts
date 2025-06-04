// Reverse a STRING that has spaces

function solve(str) {
  var reverseString = ""; //Initial State of the reversed string is empty string
  // start iterating from the end of str
  for (let i = str.length - 1; i >= 0; i--) {
    // if NOT a space, add char to str
    if (str[i] != " ") reverseString += str[i];
    // if it is a space, add the space to str
    if (str[reverseString.length] == " ")
      reverseString += str[reverseString.length];
  }
  return reverseString;
}
console.log(solve("Hi world")); // Output: "dl rowih"

// Reverse a string with space using .reverse()

function solve2(str) {
  let reversed = str.replace(/ /g, "").split("").reverse();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += " "; // Keep space at the same position
    } else {
      result += reversed.shift(); // Add reversed character
    }
  }

  return result;
}

// Example usage:
console.log(solve2("Hi world")); // Output: "dl rowih"
