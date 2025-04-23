//Write a JavaScript application that transforms a provided numerical value into hours and minutes.  



function transform(n)
{
    var hours,min;
    hours=Math.round(n/60);
    min=Math.round(n%60);
    // console.log(hours);
    // console.log(min);
    console.log(+hours,"hours and ",+min,"minutes");
    
}
transform(545);