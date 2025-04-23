
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
//console.log(alien); 
console.log(alien.laptop.brand); // Accessing nested object property;
console.log(alien.laptop["model"]); // Accessing nested object property using bracket notation;
console.log(alien["laptop"]["price"]); // Accessing nested object property using bracket notation;
console.log(alien["laptop"].brand); // Accessing nested object property using bracket notation;
console.log(alien.laptop["ram"]); // Accessing nested object property using bracket notation;
console.log(alien.laptop.storage1); // Accessing nested object property using dot notation;