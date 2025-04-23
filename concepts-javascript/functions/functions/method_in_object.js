
let laptop={
    brand:"Dell",
    model:"Inspiron",
    price:50000,
    display:function()   // method in object
    { 
        console.log(this.brand,"",this.model); // Output: Dell Inspiron
        console.log("The price is:",this.price); // Output: The price is:50000
        console.log(this); // Output: {brand: "Dell", model: "Inspiron", price: 50000, display: ƒ}
    }
}
laptop.display(); // Output: Dell