// Factorial of a number using recursion
// 
function Fact(n)
{
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case
        return n * Fact(n - 1);
    }
}

let num = 5;
let result = Fact(num); // function call
console.log("Factorial of " + num + " is " + result); // Factorial of 5 is 120