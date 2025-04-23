
let str= new Set(); // Set(6) { 'B', 'o', 'k', 'e', 'p', 'r' }  // Set is a collection of unique values
 console.log(str); 

str.add('B'); // Set(1) { 'B' }  // add method adds a value to the set
str.add('o'); // Set(2) { 'B', 'o' }  // add method adds a value to the set

// for( let Value of str){
//     console.log(Value); }

str.forEach(function(value){
    console.log(value); 
});   
 //str.forEach(value=>console.log(value)); // B o   //short form of forEach method
str.delete('o'); // Set(1) { 'B' }  // delete method removes a value from the set
console.log(str);
str.add('k'); // Set(2) { 'B', 'k' }  // add method adds a value to the set
console.log(str);
const str1=Array.from(str)
console.log(str1);


    







