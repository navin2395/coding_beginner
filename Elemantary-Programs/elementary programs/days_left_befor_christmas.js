//wap to find days left before christmas
var date=new Date();
console.log(date);
console.log(date.toTimeString());
var year=date.getFullYear();
var no_of_days;
console.log(year);
minutes=60*1000
var hours=60*minutes;
var days=hours*24;

// function leap(year){
//     if(year%4 ===0 && year%100!=0 || year%400===0)
//     {
//         return no_of_days=366;
//     }
//     else
//     {
//        return no_of_days=365;
//     }
    
// }

var cmas=new Date(year,11,25);
console.log(cmas.getDate(),cmas.toDateString(),cmas.getHours());
console.log(cmas);

if(date.getFullYear===11 && date.getDate()>25)
{
cmas.setFullYear(date.getFullYear()+1);
}

no_of_days= Math.ceil((cmas.getTime()-date.getTime())/days);
console.log(no_of_days);  //math.ceil const static method always rounds up and 
// returns the smallest integer greater than or equal to a given number

