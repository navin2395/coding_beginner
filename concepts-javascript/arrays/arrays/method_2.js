
let num=[51,68,56,49,62,48,63]  //input array

// num.forEach(n =>{
//     if(n%2==0){ // check if the number is even
//         console.log(n); // 68 
//     }
//     //console.log(n); // 51 68 49 65 47 63
//   })

var arr1=num.map(v=>v=v*2);
var arr2=num.flatMap(v=>v=v*2)
 console.log(arr1);
 console.log(arr2);


//  let evenNumbers= num.filter(i => i%2===0);
//    console.log(evenNumbers); // [ 68, 62, 48 ]

// // evenNumbers.forEach(n => {
// //     n= n*2;
// //     console.log(n); // 136 124 96
// // }); 
   

//     // console.log(evenNumbers.map(n => n*2));// [ 136, 124, 96 ]

//     let n=[1,2,3];
//     let add= n.reduce(function(result,item){
//         return result+item; // 6
//     },0); // 0 is the initial value of result
//     console.log(add); // 6
//     let sum=reduce((result,item)=> result+item,0); // 6  //shorthand version of the above code
//     console.log(sum); // 6

// // let m=[1,2,3,-1,5,6,-7,8,9]; // input array
// //     let hasnegative = m.some(function(item){
// //         return item<0; // true
// //     })
// //     console.log(hasnegative); // 

// //     // let hasnegative = m.some(item => item < 0);
// //     // console.log(hasnegative); // true

// //     let g=[1,2,3,4]; // input array
// //     let allpositive = g.every(function(item){
// //         return item>0; // false
// //     });
// //     console.log(allpositive);  

  
 