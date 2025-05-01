//Spread operator on the right side
const arr = [1, 2, ...[3, 4]];
console.log(arr); //(4) [1, 2, 3, 4]

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 (3) [3, 4, 5]

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

// 1)in Destructuring
//REST pattern for arrays

// const [mainMenu_0, mainMenu_1, mainMenu_2, ...remain] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(mainMenu_0, mainMenu_1, mainMenu_2, remain);

// const [mainMenu_0, mainMenu_1, , ...remain,Bread] = []  //error expected forth elemet to rest pattern musta be a variable and no elemnts after rest elements
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
//   ];

// Rest pattern for objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) rest pattern in functions

function add(...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

add(3, 4);
add(4, 5, 6, 7);

const x = [23, 15, 7];
add(...x); //add(23,15,7)=45

restaurant.orderpizza('mushroom', 'spinach', 'olives', 'tomato');
restaurant.orderpizza('mushroom');
