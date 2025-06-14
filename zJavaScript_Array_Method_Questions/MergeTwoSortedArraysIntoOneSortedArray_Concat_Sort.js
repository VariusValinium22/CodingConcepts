// Question 24: Merge two sorted arrays into one sorted array
// Example Input: ([1, 3, 5], [2, 4, 6])
// Expected Output: [1, 2, 3, 4, 5, 6]

const arr1 = [7, 1, 3, 5]; // First sorted array
const arr2 = [8, 2, 4, 6]; // Second sorted array

// 1️⃣ Arrow function (one-liner)
// can get better time complexity by using two-pointer technique
const mergeSorted1 = arr1.concat(arr2).sort((x, y) => x - y);

const mergeSorted2 = (a, b) => [...a, ...b].sort((x, y) => x - y);

console.log(mergeSorted1);
console.log(mergeSorted2(arr1, arr2));

// ==== Two-Pointer Technique ====================================================================
// If your arrays are already sorted...Merge without .sort() by using two-pointer technique
// Time Complexity: O(n + m) (better than O(n log n) from .sort())
// DO NOT USE if arrays are unsorted
const mergeSortedOptimized = (a, b) => {
    let i = 0, j = 0, result = [];
    
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) result.push(a[i++]);
        else result.push(b[j++]);
    }
    
    return result.concat(a.slice(i)).concat(b.slice(j));
};


console.log(mergeSortedOptimized(arr1, arr2)); // ✅ [1, 2, 3, 4, 5, 6]

// Explanation:
// The spread operator ([...a, ...b]) merges both arrays into one.
// OPTIONAL: The concat() method CAN BE USED to merge both arrays into one without modifying them.
// The sort((x, y) => x - y) function ensures the merged array remains sorted.
// This method is an alternative to using the spread operator for merging arrays.

