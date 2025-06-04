// return the factorial of a number. 5 gives 120...1*2*3*4*5

// Handle the edge case of 0
// Initialize the factorial variable to be 1
// Mult form 1 to num given
// Return the factorial result
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(5)); //1*2*3*4*5