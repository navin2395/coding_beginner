
let year=1900;
if(year%4===0 && year%100!==0 || year%400===0){
    console.log(year+" is a leap year");
}
else{   
    console.log(year+" is not a leap year");
}



//(year%4===0 && year%100!==0 || year%400===0)?console.log(year+" is a leap year"):console.log(year+" is not a leap year");  //ternary operator
