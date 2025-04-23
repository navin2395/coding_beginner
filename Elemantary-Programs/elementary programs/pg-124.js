//For x = true and y = false, the output should be logical_Nor(x, y) = false; 
// For x = false and y = false, the output should be logical_Nor(x, y) = true.
function nor(x,y)
{
    var z= (x||y);
    var a=!z;
    return a;
}

console.log(nor(false,false));

