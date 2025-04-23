
//Write a JavaScript program to find the longest string from a given array of strings.

// var names=["abc","a","adbc","abcd"];
// len=names.length;
// var larger;

// for (let i=0;i<len-1;i++)
// {
//     for(j=i+1;j<len;j++)
//     {
//         if(names.length[i]>names.length[j])
//             {
//                 larger=names[i];
//              }
//             else if(names.length[i]>names.length[j])

//             {
//                 larger = (names[i]||names[j])
//             }
          
            
//           else
//             {
//                 larger=names[j];
//             }
//         } 
        
//     }
    
// console.log("largest String:",larger);

// Function to find the longest string(s) in an array
function longest_string(str_ara) {
    var max = str_ara[0].length; // Initialize max length with the length of the first string
    str_ara.map(v => max = Math.max(max, v.length)); // Update max with the maximum length in the array using the map function
    result = str_ara.filter(v => v.length == max); // Filter out strings that have the maximum length
    return result; // Return the array of longest strings
  }	
  
  // Example usage
  console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));  
  






