
//wap to rotate the string periodically by 1 character

var str = "resource";
var n = str.length;
var k=1; // number of times to rotate the string
// console.log(n);
console.log(str);

// var str1 = str.substring(0, 5);
// console.log(str1); // get the first k characters
 
for (let i = 0; i < k; i++) {
    str = str.substring(1) + str[0]; // move the first character to the end
    console.log(str); // print the rotated string after each rotation
}

