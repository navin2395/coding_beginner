
let num=[];
num[0]=5;
num[99]=9;
console.log(num); // [ 5, <98 empty items>, 9 ]

// for(let i=0; i<num.length; i++){
//     console.log(num[i]); // 5, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, 9
// }

for(let n of num){
    console.log(n); // 5, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, <empty>, 9
} // for of loop skips empty elements

for(let key in num)  // for in loop iterates over the indexes of the array
    {
   // console.log(key);   // 0, 99
    console.log(num[key]); // 5, 9

}





