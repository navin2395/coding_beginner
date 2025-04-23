
//Write a JavaScript program to compare two objects to 
// determine if the first contains equivalent property values to the second one.

// let laptop={
//     name: "Dell",
//     cpu: "i7",
// }

// let laptop2={   
//     name: "HP",
//     cpu: "i9",
// }
//     for(let key in laptop){
//         if(laptop[key]===laptop2[key])
//         {
//             console.log("The two objects are equivalent.");
//         } 
//         else
//          {   console.log("The two objects are not equivalent."); }
//     }

    // Define a function called `matches` that takes two objects as arguments and checks if the first object contains all the key-value pairs of the second object.
const matches = (obj, source) =>
    // Iterate over each key in the source object and check if it exists in the obj object and has the same value.
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  // Test cases:
  console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
  console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
  console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false