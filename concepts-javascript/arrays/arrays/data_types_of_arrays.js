
// let values=['a', 2, 'c', 'd', 'e'];
// console.log(values); // [ 'a', 2, 'c', 'd', 'e' ]

// let data=['Navin',5,{name:'Java',exp:5},function(){console.log("Hello");}];
let data=['Navin',5,skill={name:'Java',exp:5},function greet(){console.log("Hello");}];

console.log(data); // { 'Navin', 5, skill{name:'Java',exp:5},function greet() {console.log('Hello');} }
//console.log(data[3]); // [Function: greet]
//data.greet(); // data.greet is not a function

data[3](); // Hello

 data.push('temporary')  // add element to the end of the array
// //console.log(data.push()); // 5    // 5 is the length of the array after adding 'temporary'
console.log(data); // [ 'Navin', 5, { name: 'Java', exp: 5 }, [Function: greet], 'temporary' ]

data.pop(); // remove last element of the array
 console.log(data); // [ 'Navin', 5, { name: 'Java', exp: 5 }, [Function: greet] ]

data.shift(); // remove first element of the array
console.log(data); // [ 5, { name: 'Java', exp: 5 }, [Function: greet] ]

// data.unshift('Pankaj'); // add element to the beginning of the array
// console.log(data); // [ 'Pankaj', 5, { name: 'Java', exp: 5 }, [Function: greet] ]