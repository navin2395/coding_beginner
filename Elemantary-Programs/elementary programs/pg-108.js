 //Write a JavaScript program to create the dot products of two given 3D vectors. 
// Note: The dot product is the sum of the products of the corresponding entries of the 
// two sequences of numbers.

function dot_product(arr_1,arr_2)
{
    var pro=0;
    var len=arr_1.length;
    var len1=arr_2.length;
     if (len!==len1)   return false
     else
     {
       for(let i=0;i<len;i++)
       {
        for(let j=0;j<len1;j++)
        {
            if(i===j)
            {
                pro+=(arr_1[i]*arr_2[j])
            }
        }
       }
     }
     return pro;
}

console.log(dot_product([1,2,3],[4,5,6]));

