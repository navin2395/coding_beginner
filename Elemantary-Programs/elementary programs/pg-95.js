
function replace(arr)
    
{    var arr2;
     arr2=arr.forEach(element => {
        if(element===2)
          element=5; 
        else 
         element=element;
         });
          return arr2;
}
var result;
result=replace([1,2,3,2,2,8,1,9]);
console.log(result);
