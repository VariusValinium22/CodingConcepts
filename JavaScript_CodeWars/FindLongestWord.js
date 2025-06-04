// Find the longest word in a sentence. STRING  

function findLongestWord(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");
  let longestWord = "";
  // Iterate through each word in the array
  for (let word of words) {
    // Check if the current word is longer than the current longest word
    if (word.length > longestWord.length) {
      // If true, update the longestWord
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("I love coding Javascript"));
