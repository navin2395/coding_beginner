
//Write a JavaScript program to reverse the order of bits in a integer. 
// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87

function decimal_to_binary(n)
{
    var binary=[];
    var i=0;
    while(n>0)
        {
           
            binary=Math.round(n%2);
            n=Math.round(n/2);
            i++;
        }
    
     return binary;
    
}



function negation(num)
{ var arr=[];
  var k;
  [arr,k]=decimal_to_binary(num);
  console.log(arr);
//   for(let j=0;j<k;j++)
//   {
//     arr[j]=!arr[j];

//   }
//   return arr;
 }

 console.log(decimal_to_binary(14));  
