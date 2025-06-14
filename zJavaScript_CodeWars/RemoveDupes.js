// Remove Duplicates from the ARRAY

// can use loop or a Set
//=== using a Loop ========
//Empty array to store the unique elements
// iterate the input array
// Check if the current element is already in the array
// if not, push the element to the array
function removeDuplicates(arr) {
  const uniqueElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueElements.indexOf(arr[i]) === -1) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6]));

//=== using Set =========
// Convert the array to a Set (which only allows unique values)
// then, convert the Set back to an array
function removeDuplicates2(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates2([1, 2, 3, 4, 4, 5, 6, 6]));
