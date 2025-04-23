
let str = new Map(); // Map(0) {}  // Map is a collection of key-value pairs
 //console.log(str);
str.set('A', 1); // Map(1) { 'A' => 1 }  // set method adds a key-value pair to the map
str.set('B', 2); // Map(2) { 'A' => 1, 'B' => 2 }  // set method adds a key-value pair to the map
console.log(str); // Map(2) { 'A' => 1, 'B' => 2 }  // Map is a collection of key-value pairs

//console.log(str.delete('a'));   // false  // delete method removes a key-value pair from the map
str.delete('A'); // Map(1) { 'B' => 2 }  // delete method removes a key-value pair from the map
 console.log(str); // Map(1) { 'B' => 2 }  // delete method removes a key-value pair from the map

 console.log(str.get('A')); // undefined  // get method returns the value of a key-value pair from the map
 console.log(str.get('B')); // 2  // get method returns the value of a key-value pair from the map

 //console.log(str.has('A')); // false  // has method returns true if the key exists in the map
    console.log(str.has('B')); // true  // has method returns true if the key exists in the map

 str.clear(); // Map(0) {}  // clear method removes all key-value pairs from the map
// console.log(str); // Map(0) {}  // clear method removes all key-value pairs from the map



