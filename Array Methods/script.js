'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'Premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'basic',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'Standard',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'Premium',
};

const accounts = [account1, account2, account3, account4];
//

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const diplayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
         </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//printing balance of particular account
const calcDisplayBalance = function (currentAccount) {
  currentAccount.balance = currentAccount.movements.reduce(
    (acc, curr) => acc + curr,
    0
  );
  labelBalance.textContent = `${currentAccount.balance} EUR`;
};

const calcDisplaySummary = function (currentAccount) {
  const totalDeposit = currentAccount.movements
    .filter(mov => mov > 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumIn.textContent = `${totalDeposit}€`;

  const totalWithdrawl = currentAccount.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(totalWithdrawl)}€`;

  const interest = currentAccount.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * currentAccount.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int, i, arr) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

//computing Usernames
const createUsername = function (accs) {
  accs.forEach(function (user) {
    user.username = user.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.slice(0, 1))
      .join('');
  });
};

createUsername(accounts);
// console.log(accounts);

const updateUI = function (currentAccount) {
  diplayMovements(currentAccount.movements);

  //Display Balance
  calcDisplayBalance(currentAccount);

  //Display Summary
  calcDisplaySummary(currentAccount);
};

//event handler:Login button click
let currentAccount;
let currentPin;

btnLogin.addEventListener('click', function (e) {
  //Preventing Form from submitting
  e.preventDefault();
  console.log('LOGIN:username matched');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(`LOGIN:pin matched`);

    //Display UI and welcome message
    labelWelcome.textContent = `Good Afternoon,${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 100;

    //empty input fields
    inputLoginUsername.value = inputLoginPin.value = ``;

    inputLoginPin.blur(); //removes the focus on the element on which it is called

    //Update UI
    updateUI(currentAccount);
  }
});

// transfering amounts

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); //prevents form submitting and hence prevents relaod
  const transferAmount = Number(inputTransferAmount.value);
  const recepientAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(recepientAccount);

  // checking whether withdrawl is possible
  if (
    transferAmount > 0 &&
    currentAccount.balance >= transferAmount &&
    recepientAccount &&
    recepientAccount?.username !== currentAccount.username
  ) {
    console.log('Transfer Valid ');
    //Applying deposit to transfer to account in movements array

    recepientAccount?.movements.push(transferAmount);
    // console.log(recepientAccount);

    //Applying Withdrawl to transfer from account in movements array

    currentAccount?.movements.push(Number(-1 * transferAmount));
    // console.log(currentAccount);

    //Update UI
    updateUI(currentAccount);
  }
  inputTransferTo.value = inputTransferAmount.value = ``;
});

//Loan request
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    //movement in array
    currentAccount.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//Closing on user request

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Closing Initiated');

  //checking if current user credentials match
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //find index of the closing account
    const closingIndex = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(closingIndex);

    //Delete Closing Account from accounts array
    accounts.splice(closingIndex, 1);

    //hide UI
    containerApp.style.opacity = 0;

    //Change Welcome Message
    labelWelcome.textContent = `Log in to get started`;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  console.log(accounts);
});
let sorted = false;
//Sorting The movements

btnSort.addEventListener('click', function (e) {
  diplayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// //computing global balance of all account
// const balance = function (mov) {
//   let finalbalance = [];
//   for (let i = 0; i < mov.length; i++) {
//     finalbalance.push(mov[i].movements.reduce((acc, curr) => acc + curr, 0));
//   }
//   return finalbalance;
// };

//printing balance of particular account

// console.log(createUsername('Steven Thomas Williams'));

// accounts.forEach(function (user) {
//   console.log(createUsername(user.owner));
// });

// const userdivide = user.split(' ');
// const username = userdivide.map(nameIni => nameIni.slice(0, 1));
// const usernamefinal = username.join('').toLowerCase();
// console.log(usernamefinal);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// lec 149
/* 
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.length);

// ////SLICE
// console.log(arr.slice(2)); //(3) ['c', 'd', 'e']
// console.log(arr.slice(2, 4)); //(2) ['c', 'd'] doesnot include the end index
// console.log(arr.slice(-2)); //(2) ['d', 'e']
// console.log(arr.slice(1, -1)); //(3) ['b', 'c', 'd']
// console.log(arr.slice(-1)); //['e'] the last elemnt of the array.
// console.log(arr.slice()); //(5) ['a', 'b', 'c', 'd', 'e'] shallow copy of original array mainly used for method chaining
// console.log([...arr]); //(5) ['a', 'b', 'c', 'd', 'e'] shollow copy using spread operator
// // console.log(typeof arr.slice(2)); //object as arrays are considered as objects

//SPLICE

const removed = arr.splice(2);
console.log(removed); //['c', 'd', 'e']  //returns the deleted elements of the array
console.log(arr); //(2) ['a', 'b'] original array is mutated

const arr1 = [5, 6, 7, 8, 9];
//remove last element of the array
console.log(arr1.splice(-1, 1)); //[9]
console.log(arr1); //(4) [5, 6, 7, 8]

console.log(arr1.splice(1, 2)); //(2) [6, 7] delted elements
console.log(arr1); //(2) [5, 8] mutated array

// arr1.splice();
// console.log(arr1); //original array without deleting any elements

//REVERSE

let arr2 = ['u', 'v', 'x', 'y', 'z'];
console.log(arr2.reverse()); //  ['z', 'y', 'x', 'v', 'u'] return value of reverse method is original reference to array that is reversed
console.log(arr2); //(5) ['z', 'y', 'x', 'v', 'u']  it modifies the original array

//with strings
const word = 'hello';
const reversedWord = word.split('').reverse().join(''); //word.split returns a new array on which reverse operation is performed
console.log(reversedWord); // 'olleh'
console.log(word); //hello

///////CONCAT
arr = ['a', 'b', 'c', 'd', 'e'];
arr2 = ['u', 'v', 'x', 'y', 'z'];
const letters = arr.concat(arr2); //(10) ['a', 'b', 'c', 'd', 'e', 'u', 'v', 'x', 'y', 'z']
console.log(letters);

console.log([...arr, ...arr2]); //(10) ['a', 'b', 'c', 'd', 'e', 'u', 'v', 'x', 'y', 'z']
console.log(arr); //(5) ['a', 'b', 'c', 'd', 'e']
console.log(arr2); //(5) ['u', 'v', 'x', 'y', 'z']

//Combines two or more arrays. This method returns a new array without modifying any existing arrays.

/////Join

console.log(letters.join(',')); //a,b,c,d,e,u,v,x,y,z
console.log(letters.join('')); //abcdeuvxyz
 */
//lec150
/////AT Method
/* const num = [23, 11, 64];

console.log(num.at(1)); // 11   Returns the item located at the specified index.
console.log(num.at(2)); //64    Returns the item located at the specified index.

console.log(num.at(-3)); //23

//getting last element of array
console.log(num[num.length - 1]); //64
console.log(num.slice(-1)[0]); //64
console.log(num.at(-1)); //64

//at for strings

console.log('jonas'.at(0)); //j
console.log('jonas'.at(-1)); //s
 */
////////
/* // lec151
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//exercise using for of

for (let [i, value] of movements.entries()) {
  if (value > 0) console.log(`Transaction ${i + 1}:You Deposited ${value}`);
  else console.log(`Transaction ${i + 1}:You Withdrew ${Math.abs(value)}`);
}

// movements.forEach(function (item) {
//   if (item > 0) console.log(`You deposited ${item}`);
//   else console.log(`You Withdrew ${Math.abs(item)}`);
// });

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// using arrow fuction in callback function
// // movements.forEach(item => {
//   item > 0
//     ? console.log(`You deposited ${item}`)
//     : console.log(`You Withdrew ${Math.abs(item)}`);
// });

// console.log(`----FOR EACH----`);
// movements.forEach(function (item, index, arr_org) {
//   if (item > 0)
//     console.log(
//       `Transaction ${index + 1}:You deposited ${item} for series ${arr_org}`
//     );
//   else
//     console.log(
//       `Transaction ${index + 1}:You Withdrew ${Math.abs(
//         item
//       )} for series ${arr_org}`
//     );
// });
 */
///lec 152

//MAP
/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

///SET
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'EUR', 'GBP']);
console.log(currenciesUnique); //Set(3) {'USD', 'EUR', 'GBP'}

currenciesUnique.forEach(function (value, _, set) {
  console.log(`currency choose from ${set} is ${value}`);
}); */

////lec 157 -The Map Method

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurtoUsd = 1.1;

const convertedArray = movements.map(function (value) {
  return (value = value * eurtoUsd);
});
console.log(movements);
console.log(convertedArray);

//using arrow function
const convertedArrayUSD = movements.map(mov => mov * eurtoUsd);
console.log(convertedArrayUSD);

// //using for of loop
// const movementsUSD = [];
// for (let mov of movements) movementsUSD.push(mov * eurtoUsd);
// console.log(movementsUSD);

const statementArray = movements.map((mov, i) =>
  mov > 0
    ? `Transaction ${i + 1}: ${mov} deposited`
    : `Transaction ${i + 1}: ${Math.abs(mov)} Withdrawl`
);

console.log(statementArray);

const statementArrayCopy = movements.map((mov, i) => {
  return `Transaction ${i + 1}: ${
    mov > 0 ? `${mov} deposited` : `${Math.abs(mov)} Withdrawl`
  }`;
});

console.log(statementArrayCopy);
 */
//////////lec159 --Filter method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposited = movements.filter(function (mov) {
//   if (mov > 0) return mov;
// });
// //using arrow function
// const withdrawls = movements.filter(mov => mov < 0);
// console.log(movements);
// console.log(deposited);

// console.log(withdrawls);

//////lec160--Reduce method
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i}:${acc}`);
//   acc += curr;
//   return acc;
// }, 0);
// console.log(balance); //we got iteration starting from 0 as current value as accumulator initial value=0

//using arrow function
console.log('-----USING ARROW FUNCTION');
const balance2 = movements.reduce((acc, curr, i, arr) => acc + curr, 0);
console.log(balance2);

// without using initial value
// here accumulator becomes the first element of the array in case initial value is not assigned
console.log('----without initial value');
const balance3 = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i}:${acc}`);
  return (acc += curr);
});
console.log(balance3); //iteration starts with 1 i.e current value starts with index=1

// Maximum value using reduce method

const max = movements.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
}, movements[0]);

console.log(max);
 */
//162 Chaining Methods

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //PIPELINE OF METHOD
// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(conv => conv * 1.1)
//   .reduce((acc, value) => acc + value, 0);
// console.log(totalDepositUSD);

//LETS say if i make mistake then how to access the array
// console.log(movements);
// const totalDeositUSD = movements
//   .filter(mov => mov < 0)
//   .map((conv, i, arr) => {
//     console.log(arr);
//     return conv * 1.1;
//   })
//   .reduce((acc, value) => acc + value, 0);
// console.log(totalDeositUSD);
//so array output of the current method can be accessed by array parameter in the next method to which method is called upon

////lec 164 find method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawl = movements.find(mov => mov < 0);
// console.log(firstWithdrawl);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

//lec 168

//to show the first and the last occurence check
// const movements = [200, 450, -130, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// const firstElement = movements.find(element => element < 0);
// console.log(firstElement); //-130

// const firstIndex = movements.findIndex(element => element < 0);
// console.log(firstIndex); //2

// const lastElement = movements.findLast(element => element < 0);
// console.log(lastElement); //-130

// const lastIndex = movements.findLastIndex(element => element < 0);
// console.log(lastIndex); //6

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const lastWithdrawl = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawl); //-130

// const latestWithdrawlIndex = movements.findLastIndex(mov => mov > 2000);
// console.log(latestWithdrawlIndex); //3

// console.log(
//   `Your latest large movement was ${
//     movements.length - latestWithdrawlIndex
//   } movements ago`
// );

//lec 169

// console.log(movements);
// console.log(movements.includes(-130)); //true
// // //it checks only for equality condition if we want to test using other conditions than some is used

// // //important some returns true for first truthy value
// const isWithdrwal = movements.some(mov => mov < 0); //indeed we have element < 0
// console.log(isWithdrwal); //true

// const anyDepositabove5000 = movements.some(mov => mov > 5000);
// console.log(anyDepositabove5000); //false

// // //EVERY
// // //every looks for first falsy value it it gets it returns a false else it returns true

// console.log(movements.every(mov => mov > 0)); //false
// console.log(account4.movements.every(mov => mov > 0)); //true

// //Seperate Callback
// const deposit = mov => mov > 0;

// console.log(movements.some(deposit)); //true
// console.log(movements.every(deposit)); //false
// console.log(movements.filter(deposit)); //(5) [200, 450, 3000, 70, 1300]

// lec 170 flat and flatmap

////FLAT
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// const flatarray = arr.flat(1);
// console.log(flatarray); //(8) [1, 2, 3, 4, 5, 6, 7, 8]

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// console.log(arrDeep.flat()); //depth as default parameter 1
// //(6) [Array(2), 3, 4, Array(2), 7, 8]

// //depth defined to 2 will flat all elements nested upto level 2
// console.log(arrDeep.flat(2));
// (8)[(1, 2, 3, 4, 5, 6, 7, 8)];

// const arrDeep2 = [[[1, 2], 3], [4, [[5], 6]], 7, 8];
// console.log(arrDeep2.flat(2)); //(8) [1, 2, 3, 4, Array(1), 6, 7, 8]

// console.log(arrDeep2.flat(Infinity)); //(8) [1, 2, 3, 4, 5, 6, 7, 8]
// // //so if you are not knowing the nesting level of elements you must use depth of inifinity

// // adding all movements in bankist example
// const account_transactions = accounts.map(acc => acc.movements);
// console.log(account_transactions); //(4) [Array(8), Array(8), Array(8), Array(5)]
// const total_movements = account_transactions.flat();
// console.log(total_movements); //flatening the account_transaction array
// //sum of total balance
// const total_balance = total_movements.reduce((acc, curr) => acc + curr, 0);
// console.log(total_balance); //17840

// console.log(`Using Method Chaining`);
// const totalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(totalBalance);

// // ///FLATMAP
// console.log('-------using Flatmap');
// const totalBalance2 = accounts
//   .flatMap(acc => acc.movements)  //Array[29]
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(totalBalance2);

///////////lec 173-Grouping Arrays
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// const groupedMovements = Object.groupBy(movements, mov =>
//   mov > 0 ? 'Deposits' : 'Withdrawls'
// );
// console.log(groupedMovements); //{Deposits: Array(5), Withdrawls: Array(3)}

// const groupedByActivities = Object.groupBy(accounts, account => {
//   const measureCount = account.movements.length;
//   if (measureCount >= 8) return 'active';
//   if (measureCount >= 5) return 'moderate';
//   return 'inactive';
// });
// console.log(groupedByActivities);

// //grouping by object Property
// // const groupedAccount = Object.groupBy(accounts, account => account.type);

// //destructured way
// const groupedAccount = Object.groupBy(accounts, ({ type }) => type);
// console.log(groupedAccount);

//lec174-Creating and Filling Arrays

console.log([1, 2, 3, 4, 5, 6, 7, 8]); //(8) [1, 2, 3, 4, 5, 6, 7, 8]
const num = new Array(1, 2, 3, 4, 5, 6, 7, 8); //(8) [1, 2, 3, 4, 5, 6, 7, 8]
console.log(num);
const x = new Array(7); //(7) [empty × 7]
console.log(x);
//when we pass a single number than Array constructor creates an empty array with length=single number

console.log(x.map(element => (element = 5))); //(7) [empty × 7]
//map and other similar methods dont work on empty arrays

x.fill(5); //(7) [5, 5, 5, 5, 5, 5, 5]
//It modifies the original array on which fill method is called.
console.log(x);
console.log(x.fill(7, 5)); // (7) [5, 5, 5, 5, 5, 7, 7] fill(value,starting index) to the end
console.log(x.fill(7, 2, 4)); //(7) [5, 5, 7, 7, 5, 7, 7] fill(value,starting index,ending index)
//end index is not included in the method just like slice
const y = new Array(7);
// console.log(y.fill(1, 3));(7)// [empty × 3, 1, 1, 1, 1]
console.log(y.fill(1, 3, 6)); //(7) [empty × 3, 1, 1, 1, empty]

//can also work on array with elements
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.fill(23, 4, 6)); //(8) [1, 2, 3, 4, 23, 23, 7, 8]

///////Array.from()

//Generate a Range of Numbers
/* const z = Array.from({ length: 7 }, () => 1); //(7) [1, 1, 1, 1, 1, 1, 1]
console.log(z);

const naturalNum = Array.from({ length: 7 }, (_, i) => i + 1); //empty or _ throw away variable
console.log(naturalNum);

//100 random dice rolls
const rollDice100 = Array.from(
  { length: 100 },
  (curr, i) => Math.trunc(Math.random() * 6) + 1
); //(0,1)*6+1 =>random numbers between 1 and 7
console.log(rollDice100);

//converting nodeList into Array

const movementsUI = Array.from(document.querySelectorAll('.movements__value')); //(2) [div.movements__value, div.movements__value]

console.log(movementsUI); //this shows the two movements created during initial html document

//all movements after login we attach to an event handler

labelBalance.addEventListener('click', function () {
  const movementsUIAll = document.querySelectorAll('.movements__value');
  console.log(movementsUIAll);

  //output NodeList(8) [div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value]

  // console.log(movementsUIAll.map(el => (el = el.textContent)));

  // Uncaught TypeError: movementsUIAll.map is not a function
  // at HTMLParagraphElement.<anonymous> as array methods cannot be applied

  const arrmovementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => (el = el.textContent)
  );
  console.log(arrmovementsUI); //(8) ['1300€', '70€', '-130€', '-650€', '3000€', '-400€', '450€', '200€']
  //as textcontent is a string we need to convert to numbers

  const arrNumMovementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => (el = Number(el.textContent.replace('€', ''))) //(8) [1300, 70, -130, -650, 3000, -400, 450, 200]
  );
  console.log(arrNumMovementsUI); //(8) [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN] as € is not a number so use replace €  by ''

  //output:(8) [div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value]0: div.movements__value1: div.movements__value2: div.movements__value3: div.movements__value4: div.movements__value5: div.movements__value6: div.movements__value7: div.movements__value]
});

const movementsUI2 = [...document.querySelectorAll('.movements__value')];
console.log(movementsUI2); //but then method chaining is not possible directly */

//lec 175

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr = [-2, -1, 0, 1, 2];
console.log(arr); //(5) [-2, -1, 0, 1, 2]
arr.reverse(); //(5) [2, 1, 0, -1, -2]
console.log(arr);
//Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

//Reverse method on movements
// const reversedMov = movements.reverse();
// console.log(`Reversed array`, reversedMov); //(8) [1300, 70, -130, -650, 3000, -400, 450, 200]
// console.log('Original Array', movements); //(8) [1300, 70, -130, -650, 3000, -400, 450, 200] original array is mutated

//toReversed

const reversedMov2 = movements.toReversed();
console.log('Reversed Array', reversedMov2); //(8) [1300, 70, -130, -650, 3000, -400, 450, 200]
console.log('Original Array', movements); //(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
//slice + reverse = toReversed

//same works for toSorted (sort) and toSpliced(splice)

// movements[1] = 2000;

const newMovements = movements.with(1, 2000);
console.log(movements);
// The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.
 */
