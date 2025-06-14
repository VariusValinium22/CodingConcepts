// forEach: loops over each element in the array and calls the given 'callback' function
        /* 
        names1.forEach(
            n => {<callbackFunction>> });   */

let names1 = ["Danny", "Joe", "Sarah", "Molly", "Billy"];
names1.forEach(n => {
    console.log(n);
});



//== you can numbers =====================================
let numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(n => {
    n * 2;
    console.log(n);
});
/* 
RESULT: 
1
2
3
4
5 */

//=======================================================
// forEach is an 'easier to code' for loop
for(let i = 0; i < names1.length; i++) {
    console.log(names1[i]);
};
/* 
RESULT: 
Danny
Joe
Sarah
Molly
Billy */

// skip items in the array by changing the Initialization and the Incrementation of the ForLoop
for(let i = 2; i < names1.length; i = i + 2){
    console.log(names1[i]);
};
/* 
RESULT:
Sarah
Billy */


