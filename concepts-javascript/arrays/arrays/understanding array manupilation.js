
let data =[5,7,8,9,10];
console.log(data); // [ 5, 7, 8, 9, 10 ]

data.push(11,12); // add elements to the end of the array
console.log(data); // [ 5, 7, 8, 9, 10, 11, 12 ]

data.push(numeral={number:'new number'}); // add object to the end of the array
console.log(data); // [ 5, 7, 8, 9, 10, 11, 12, { number: 'new number' } ]

data.splice(5,2,'pragyan','naman','prashant'); // remove 2 elements from index 5 and add new elements
console.log(data); // [ 5, 7, 8, 9, 10, 'pragyan', 'naman', 'prashant' ,{ number: 'new number' } ]