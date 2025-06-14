// .concat()
// non-mutating Method
// creates a  NEW array, combines each of the arrays onto the end of the first array
let names = ["Danny", "Joe", "Sarah", "Molly"];
let names2 = ["John", "Tom"];
let names3 = ["Delia", "Smith"];

let joined = names.concat(names2, names3);
console.log(joined);
console.log(joined.join(" "));
console.log(joined.toString());
