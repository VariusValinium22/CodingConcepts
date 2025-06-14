// .slice(index1, index2)
// Non-mutating Method
// Returns a NEW array with a sliced copy from the original array.
    // slice from index1 to index3 but not including index3
    
let names = ["Danny", "Joe", "Sarah", "Molly"];
console.log(names);

let slice = names.slice(1, 3);
console.log(slice); // Joe, Sarah

// slice from index1 to the end of the array
let slice2 = names.slice(1);
console.log(slice2); // Joe, Saray, Molly

