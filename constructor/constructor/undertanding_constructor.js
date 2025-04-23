
function Alien(name, language) 
{
    this.name= name;
    this.skill= language;
    this.getSkill= function() {
        return this.skill;
    }
}

let alien1= new Alien('navin','javascript')

let alien2= new Alien('sachin','java')

alien2.skill= 'python';
  
//console.log(alien2);  // Output: Alien { name: 'sachin', skill: 'python' }
//console.log(alien1);  // Output: Alien { name: 'navin', skill: 'javascript' }

let output=alien1.getSkill(); // Output: javascript
console.log(output); // Output: javascript

console.log(alien2.getSkill()); // Output: python


