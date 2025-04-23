
var today = new Date();
console.log("Today is: " +today);

// var day=today.getDate();
// console.log("Day: " +day);

// var time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// console.log("Time: " +time);

// var month=today.getMonth() ;
// console.log("Month: " +month);  

// var str=today.toString();
// console.log("String: " +str);

var str1=today.toDateString();
console.log("Date String: " +str1);                     

// var str2=today.toTimeString();
// console.log("Time String: " +str2);

// var str3=today.toLocaleDateString();
// console.log("Locale Date String: " +str3);

// var str4=today.toLocaleTimeString();
// console.log("Locale Time String: " +str4);

//determine the time is in am or pm
var hours=today.getHours();
var prepand=(hours<12)?"AM":"PM";
console.log("Prepand: " +prepand);

//convert 24 hours to 12 hours format
var hours12=(hours>12)?hours-12:hours;
console.log("12 Hours: " +hours12);

