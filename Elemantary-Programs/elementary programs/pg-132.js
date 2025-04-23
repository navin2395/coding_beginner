//wap to find distinct prime factors a number 

// function factor(num)
// {
// let i=2;
// var f=Array();
// var c=0;              //counter for array
// while(i<=num/2)
     
//   {
//      if(num%i===0){
        
//         f[c]=i;
//         c++
//      } 
//         i++;
//   }
//   console.log(f);
//   var p=[];
  
//    for(let j=0;j<f.length;j++)   //fetching array elements;
//    {
//         for(let k=2;k<=f[j];k++)
//         {
//               if(f[j]%k===0 && k<f[j])
//                 { break;}
//               if(f[j]%k===0 && k===f[j])
//             {
//                 p[j]=k;
//             }
                    
//         }

//    }
//   return p;
// }

// console.log(factor(8));

// Function to find prime factors of a number
function prime_factors(num) {
  // Function to check if a number is prime
  function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // If the number is divisible by any number other than 1 and itself, it's not a prime
    }
    return true; // Return true if the number is prime
  }

  const result = []; // Initialize an empty array to store prime factors
  
  // Loop through numbers from 2 to 'num'
  for (let i = 2; i <= num; i++) {
    // While 'i' is a prime factor and divides 'num' evenly
    while (is_prime(i) && num % i === 0) {
      if (!result.includes(i)) result.push(i); // Add 'i' to the result array if it's not already present
      num /= i; // Divide 'num' by 'i'
    }
  }
  
  return result; // Return the array containing prime factors
}

// Test cases
console.log(prime_factors(100)); // Output: [2, 5]
console.log(prime_factors(101)); // Output: [101]
console.log(prime_factors(103)); // Output: [103]
console.log(prime_factors(104)); // Output: [2, 13]
console.log(prime_factors(105)); // Output: [3, 5, 7] 

