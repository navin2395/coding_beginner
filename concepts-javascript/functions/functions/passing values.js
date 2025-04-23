//wap to add first n natural numbers

function addNaturalNumbers(n) //function declaration
{
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//let result= addNaturalNumbers(5); // 15    //passing function to variable
console.log(addNaturalNumbers(5)); // Output: 15    //passing fuction as a argument