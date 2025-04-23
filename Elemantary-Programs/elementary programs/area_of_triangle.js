 var s1=5,s2=6,s3=7;

 var s=(s1+s2+s3)/2;  // semi-perimeter
 // s=(a+b+c)/2

 var area=Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));  // area of triangle using Heron's formula

 console.log("Area of triangle is:"+area);