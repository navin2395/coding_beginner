 //let num=[42,51,24,98,65,12]
 let num=[51,68,49,65,47,63]
//   console.log(num); // [ 42, 51, 24, 98, 65, 12 ]

  for(let Value of num){
    console.log(Value); // 42 51 24 98 65 12
  }
 
//   num.forEach((value)=>{
//     console.log(value); // 42 51 24 98 65 12
//   })
num.forEach(n =>{
    console.log(n); // 51 68 49 65 47 63
  });


  num.forEach((value,index,temp=[])=>{
    console.log(`index: ${index} and index at temp[${index}]`); // 0 1 2 3 4 5
  });