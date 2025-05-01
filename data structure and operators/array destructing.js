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
};

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

// const [x, y, z] = arr; //can also be used [2,3,4]  //destrcuting assignment

// console.log(x, y, z);
// console.log(arr);

// const [first, second] = restaurant.categories;
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// to manually switch the values[];
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// switching variables using destructuring concept
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive two return values from function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);

//nested destructuring
const nested = [2, 4, [5, 6]];
const [c, d, [e, f]] = nested;
console.log(c, d, e, f);

//Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
