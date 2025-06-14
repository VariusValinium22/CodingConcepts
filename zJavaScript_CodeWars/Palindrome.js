// Is a STRING a palindrome?
// Reverse the string
// Compare the reversedString with the original str

function isPalindrome(str) {
  const reversedString = str.split("").reverse().join("");
  return str === reversedString;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("NotPalindrome"));

//===================================================================
function isPalindrome2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

console.log(isPalindrome2("racecar"));
console.log(isPalindrome2("NotPalindrome"));
