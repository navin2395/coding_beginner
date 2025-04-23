
function factorial(n)
{    let mul=1;
    for (let i=1;i<=n;i++)
    { 
        mul=mul*i;
    }
     return mul; // Return the factorial of n   
}


function factorial_num(n){
 if (n < 0) return undefined; // Factorial is not defined for negative numbers
 else if (n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1
 else return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}

// Test cases
console.log(factorial_num(5)); // 120
console.log(factorial_num(-1)); // undefined (negative number)
