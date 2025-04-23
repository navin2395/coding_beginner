let alien={
    name:"Navin",
    age: 25,
    tech:"JavaScript",
    'work exp': 8,
    laptop:{
        brand:"Dell",
        model:"Inspiron",
        price: 50000,
        ram: 16,
        storage1: 512
    }
}

for(let key in alien)
    {
    //console.log(key);    
    //console.log(key,":",alien[key]);
}
for (let key in alien.laptop)
    {
    //console.log(key);    
    console.log(key,":",alien.laptop[key]);
}