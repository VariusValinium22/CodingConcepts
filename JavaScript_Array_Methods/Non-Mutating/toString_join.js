// .toString();
// non-mutating Method
// Creates a NEW comma seperated array as a string: Danny,Joe,Sarah,Molly
let names = ["Danny", "Joe", "Sarah", "Molly"];

let stringNames = names.toString();
console.log(names);
console.log(stringNames);

// .join()
// Creates a NEW array with the specified separator. i.e. a space or a comma

let stringNames2 = names.join(" ");
console.log(stringNames2);
