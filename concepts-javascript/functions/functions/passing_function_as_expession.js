
let add=function(num1,num2)
{
    return num1+num2;
}
let sum= add; // passing function to variable
console.log(add(5,10)); // Output: 15
console.log(sum(5,10)); // Output: 15
console.log(add); // Output: function