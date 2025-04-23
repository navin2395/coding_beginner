
var year;
for(var i=2015;i>2014 && i<2050;i++)
    { year = i;
      var date=new Date(year,0,1);
      var day=date.getDay(); 
       //console.log("The first day of the year " + year + " is " + date.toDateString() );
       if(day===0)
       {
        console.log("year" + year + " is a Sunday");
       }
}

// // Loop through the years from 2014 to 2050 (inclusive)
// for (var year = 2014; year <= 2050; year++) {
//     // Create a Date object for January 1st of the current year
//     var d = new Date(year, 0, 1);

//     // Check if January 1st is a Sunday (where Sunday corresponds to day index 0)
//     if (d.getDay() === 0) {
//         // Log a message if January 1st is a Sunday for the current year
//         console.log("1st January is being a Sunday  " + year);
//     }
// }
