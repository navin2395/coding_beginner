// function newerversion(laptop1,laptop2) {

// // function to compare two laptops
//  if(laptop1.cpu>laptop2.cpu) // compare cpu of two laptops
//     console.log("The newer version is:",laptop1.brand,laptop1.model); // Output: The newer version is: Dell Inspiron
//  else
//     console.log("The newer version is:",laptop2.brand,laptop2.model); // Output: The newer version is: HP Pavilion
// }




let laptop1={
    cpu:"i5",
    brand:"Dell",
    model:"Inspiron",
    price:50000,
    display:function()   // method in object
    { 
        console.log(this.brand,"",this.model); // Output: Dell Inspiron
        console.log("The price is:",this.price); // Output: The price is:50000
        console.log(this); // Output: {brand: "Dell", model: "Inspiron", price: 50000, display: ƒ}
    },
    compare:function(laptop2) // method in object
    {
        if(this.cpu>laptop2.cpu) // compare cpu of two laptops
            console.log("The newer version is:",this.brand,this.model); // Output: The newer version is: Dell Inspiron
        else
            console.log("The newer version is:",laptop2.brand,laptop2.model); // Output: The newer version is: HP Pavilion
    }
}

let laptop2={
    cpu:"i7",
    brand:"HP",
    model:"Pavilion",
    price:60000,
    display:function()   // method in object
    { 
        console.log(this.brand,"",this.model); // Output: HP Pavilion
        console.log("The price is:",this.price); // Output: The price is:60000
        console.log(this); // Output: {brand: "HP", model: "Pavilion", price: 60000, display: ƒ}
    }
}

//newerversion(laptop1,laptop2)  // function to compare two laptops
laptop1.compare(laptop2) // method in object to compare two laptops