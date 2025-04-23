var diff=0;
function difference(n){
diff = Math.abs(13-n);
if(diff<=13)
    return 13-n;
else
 return Math.abs((13-n)*2)
}

var result=difference(64);
console.log(result);

