//Write a JavaScript program to check whether a given matrix is lower triangular or not. 
//Note: A square matrix is called lower triangular if all the entries above the main diagonal 
// are zero.//
function is_lower_triangular(matrix_data)
{
for (let i = 0; i < matrix_data.length; i++)
    {
      rows = matrix_data.length;
      cols = matrix_data[i].length;
  if(rows != cols)
    {
     console.log("Matrix is a square matrix");
     return false;
    }
    }

   for(let i=0;i<matrix_data.length;i++)
   {
     for(j=0;j<matrix_data.length;j++)
     {
        if(i<j && matrix_data[i][j]!==0)
            return false;
     }
      
   }
   return true;

}
console.log(is_lower_triangular([[4,0,0],[1,2,0],[4,5,3]]));