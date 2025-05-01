'strict mode';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // object property name can also be computed enhaced literal 3
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderdelivery({ starterIndex = 1, mainIndex = 0, address, time = '20:00' }) {
    console.log(
      `Order Delivered! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${address}  at ${time}`
    );
  },
  //   orderpizza: function (mainIngredient, ...otherIngredient) enhanced literal 2.
  orderpizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
  //   openingHours: openingHours, instead of this we can write
  //enhaced literal 1.
  openingHours,
};

// console.log(restaurant.openingHours.mon); //undefined as mon object property is not there
// // console.log(restaurant.openingHours.mon.open); //cannot read property of undefined mon
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);
// //  lets say opening hours may be optional property
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //and if such properties goes on for long nested objects the code becomes confusing
// console.log(restaurant.openingHours.mon?.open);
// //it will check for mon as object is present if not it will straight return undefined and won't check further

// console.log(restaurant.closingHours?.thu?.open);
// //it will check forclosing hours and then thu as object is present ,if not it will straight return undefined and won't check further.

//////////////
//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let item of days) {
  console.log(item);
  let open = restaurant.openingHours[item]?.open ?? 'closed';
  console.log(`On ${item} we are open at ${open}`);
  //   if (restaurant.openingHours.item)
  //     console.log(restaurant.openingHours.item.open);
}

//for checking method
console.log(restaurant.order(1, 2)); //(2) ['Bruschetta', 'Risotto']
console.log(restaurant.ordermain?.(1, 2)); //undefined

console.log(restaurant.order?.(1, 2) ?? 'Method doesnot exist'); //['Bruschetta', 'Risotto']
console.log(restaurant.ordermain?.(1, 2) ?? 'Method doesnot exist'); //Method doesnot exist

///for arrays

const users = [{ name: 'Jonas', email: 'jonas08.io' }];
const users1 = [];
console.log(users[0]?.name ?? 'array is empty'); //Jonas
console.log(users1[0]?.name ?? 'array is empty'); //array is empty

if (users1.length > 0) console.log(users1[0].name);
else console.log('array is empty');
