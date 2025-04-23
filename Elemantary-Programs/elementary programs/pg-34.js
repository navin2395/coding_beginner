
//Write a JavaScript program to find the largest number from the two given positive integers.
//  The two numbers are in the range 40..60 inclusive.  


 
function maxrange(x,y){
    if((x>=40 && x<=60) && (y>=40 && y<=60))
    {
        if (x===y)
            console.log(+x, "and " +y,"are same numbers")
        else if(x>y)
            console.log(+x ,"is a larger number")
        else
              console.log(+y, "is a larger number");
    }
    else
      console.log("Invalid numbers");
}
   maxrange(45,55);


