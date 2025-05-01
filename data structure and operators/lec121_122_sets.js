'strict mode';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderdelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order Delivered! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${address}  at ${time}`
    );
  },
  orderpizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
// console.log(typeof ordersSet);

// console.log(ordersSet);

// console.log(new Set('jonas')); //strings are also iterables hence can be passed in set  //Set(5) {'j', 'o', 'n', 'a', 's'}

// console.log(ordersSet.size); //3

// console.log(ordersSet.has('Pasta')); //true
// console.log(ordersSet.has('Garlic Bread')); //false to check whether given element is present used in conitional statements

// console.log(ordersSet.add('Garlic Bread')); //just returns appended set with element added at the end
// ordersSet.add('Garlic Bread'); //only the first occurence will be inserted in set
// console.log(ordersSet);

// console.log(ordersSet.delete('Pizza')); //returns true which means pizza was there as element and is remobed
// console.log(ordersSet); //Set(3) {'Pasta', 'Risotto', 'Garlic Bread'}

// ordersSet.clear();
// console.log(ordersSet);  //Set(0) {size: 0}

//for of loop in sets
// for (const value of ordersSet) console.log(value);

/////////////
//example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Manager'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);

// const Unique = Array.from(staffUnique); // //const Unique=[...new Set(staff)]
// console.log(Unique);

// const lettersUnique = new Set('JonasSchedtman').size;
// console.log(lettersUnique); //small s and capital S are considered different

///////////////////////////////////////
// New Operations to Make Sets Useful!

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

const unionFoods = italianFoods.union(mexicanFoods);
console.log('Union:', unionFoods);
console.log([...unionFoods]);

const unionFoods_1 = [...new Set([...italianFoods, ...mexicanFoods])];
console.log(unionFoods_1);

const uniqueItalian = italianFoods.difference(mexicanFoods);
console.log('Difference:', uniqueItalian); //and vice versa can be done

const uniqueMexican = mexicanFoods.difference(italianFoods);
console.log(uniqueMexican);

const symmtericDifferenceFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log('Symmetric Difference:', symmtericDifferenceFoods);

const disjointValues = italianFoods.isDisjointFrom(mexicanFoods);
console.log('Disjoint Booleab Value:', disjointValues);

const subsetValues = italianFoods.isSubsetOf(mexicanFoods);
console.log('subset boolean value:', subsetValues);
