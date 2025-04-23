//Write a JavaScript program to concatenate two strings and return the result. 
// If the length of the strings does not match, then remove the characters from the longer string

function merge(str1,str2)
{
   var len1=str1.length;
   var len2=str2.length;
   var diff;
   var str3;
   if(str1!=str2)
   {
     if(len1>len2)
     {
        diff=len1-len2;
        str3=str1.substring(0,len1-diff).concat(str2);
            console.log(str3);
     }
     else
     {
        diff=len2-len1;
        str3=str1.concat(str2.substring(0,len2-diff));
        console.log(str3);
     }
   }
   else
   {
    str3=str1.concat(str2);
    console.log(str3);
   }
}

merge("Raj","Kirti")