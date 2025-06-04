// Reverse a STRING

function reverseString(str) {
  // Initialize an empty string to store the reversed string
  let reversed = "";
  // iterate through the chars of the input string in reverse order
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("Hello World"));

//===================================================================
// Split the string into an array of chars
// Reverse the order of elements in the array
// Join the chars back together into a string
function reverseString2(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString2("Hello Marty"));
