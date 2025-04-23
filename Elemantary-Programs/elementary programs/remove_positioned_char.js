



//console.log(len);

var pos=4
function remove(str){
var len=str.length;
for(let i=0;i<pos;i++)
{
    if(i===(pos-1))
    {
     str=str.substring(0,i)+str.substring(i+1,len)
     return str;
       break;
    }
}
}
console.log(remove("clear"));
