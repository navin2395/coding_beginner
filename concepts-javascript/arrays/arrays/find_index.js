let objects=[{name:'John'},{name:'Doe'},{name:'Smith'}]; // input array of objects

let findindex=objects.findIndex(function(item){
    return item.name==='Doe'; // 1
});
console.log(findindex); // 1

let findindex_1=objects.findIndex(item=>item.name==='Smith');   // 2  //short hand version of the above code
console.log(findindex_1); // 2
