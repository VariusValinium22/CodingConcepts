// Write the findVowels() function that takes a string
// of text str and returns the number of vowels in that text
const vowels = ['a', 'e', 'i', 'o', 'u'];

function findVowels(str) {
    return str.split('').reduce((sum, char) =>
    vowels.includes(char) ? sum + 1 : sum, 0);
}


console.log(findVowels('how many vowels are here?'));

//== Using forEach =========
function findVowelsForEach(str) {
    let sum = 0;
    str.split('').forEach(char => {
        if(vowels.includes(char)) {
            sum++;
        }
    });
    return sum;
}

console.log(findVowelsForEach('how many vowels are here?'));

//== using forEach with a result that Count the vowels into a list ===
function findVowelsForEachList(str) {
// Initialize counts for each vowel
  const vowelCounts = { a: 0, e: 0, i: 0, o: 0, u: 0 }; 

  str.split('').forEach(char => {
    if (vowels.includes(char)) {
// Increment the count for the specific vowel
      vowelCounts[char]++; 
    }
  });

  // Convert the result to a list format
  const resultList = [];
  for (const [vowel, count] of Object.entries(vowelCounts)) {
    resultList.push(`${vowel.toUpperCase()}: ${count}`);
  }

  return resultList;
}

console.log(findVowelsForEachList('how many vowels are here?').join('\n'));