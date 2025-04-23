let input="planet"
let alien = {};
 //console.log(alien);
 //console.log(typeof alien);
    alien = {
        name: 'Zog',
        age: 200,
        planet: 'Mars',
        'galaxy type': 'Andromeda'  // property with spaces
    };
    //console.log(alien); //object
    console.log(alien.name);    //property access using dot notation
    console.log(alien['age']);  //property access using bracket notation
    console.log(alien[input]);  //property access using variable
    console.log(alien['galaxy type']); //property access using bracket notation with spaces
    
