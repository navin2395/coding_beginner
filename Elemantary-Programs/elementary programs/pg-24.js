//Write a JavaScript program to create another string from a given string with
//  the first character of the given string added to the front and back.  

function addstring(str){
    var temp=str[0];
    var str1= temp.concat(str,temp);
    
    return str1;
}

console.log(addstring("poem"));