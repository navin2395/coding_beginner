'strict mode';

const arr = [5, 6, 7];

const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

const newGoodArr = [1, 2, ...arr];
console.log(newGoodArr);

const checkArr = [1, 2, arr];
console.log(checkArr);

console.log(...newGoodArr); //printing same value as below
console.log(1, 2, 7, 8, 9);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Your delicious pasta is ready made using ${ing1},${ing2} and ${ing3} `
    );
  },
};
//adding elemnts in the array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); //new array with updated value
console.log(restaurant.mainMenu); //original array remains the same

//copying array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//concatenate two or more arrays
const array_add = restaurant.mainMenu.concat(restaurant.starterMenu); //through concatproperty
console.log(array_add);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; //concat using spread operator
console.log(menu);

//Iterables:Arryas,Maps,Sets,Strings but not objects

const str = 'jonas';
const strarr = [...str, ' ', '.S'];
console.log(strarr);

// const templarr=(`${...str} Schemedtman`);  //Unexpected token '...'
// console.log(templarr);

//arguments passed in functions usign spread operator
// const ingredients = [
//   prompt("let's make Pasta your ingredient 1?"),
//   prompt("let's make Pasta your ingredient 2?"),
//   prompt("let's make Pasta your ingredient 3?"),
// ];

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); without using spread operator
// restaurant.orderPasta(...ingredients);

//from ES18 version it(spread operator) works on objects as well

const newRestaurant = {
  FoundedIn: 1988,
  ...restaurant,
  Founded_by: 'Guiseppe',
};
console.log(newRestaurant);

//Shallow Copy:copy upto level one
const restaurantCopy = { ...restaurant };
console.log('Original', restaurant);
console.log('Copied', restaurantCopy);

restaurantCopy.categories.push('Chinese'); //Problem due to shallow copy
console.log('Original', restaurant);
console.log('Copied', restaurantCopy);

// const restaurantClone = structuredClone(restaurant);
// restaurantClone.categories.push('Mexican');
// console.log(restaurantClone);
// Uncaught DataCloneError: Failed to execute 'structuredClone' on 'Window': function (ing1, ing2, ing3) {
// console.log(`Your delicious pasta is ready made using ${ing1},${ing2...<omitted>... } could not be cloned.

const { orderPasta, ...cloneable } = restaurant;
const restaurantClone_1 = structuredClone(cloneable);
console.log(restaurantClone_1);

restaurantClone_1.categories.push('Mexican');

console.log('Original', restaurant); //categories object property array of 5 elemrnts
console.log('Cloned', restaurantClone_1); //categories  object property array of 6 elements
