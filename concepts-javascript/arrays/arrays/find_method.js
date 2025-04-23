
let objects=[{name:'John'},{name:'Doe'},{name:'Smith'}]; // input array of objects



let findObject=objects.find(function(item){
    return item.name==='jason'; // undefined
});
console.log(findObject); // { name: 'Doe' }

let findObject_1=objects.find((item,index)=>{
    return item.name==='Doe'   
} );
console.log(findObject_1); // { name: 'Doe' }

let findObject_2=objects.find(item => item.name==='Doe' );
console.log(findObject_2); // { name: 'Doe' }

