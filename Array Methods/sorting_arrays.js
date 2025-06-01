'strict mode';
//strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners);
// console.log(owners.sort());
// console.log(`After sorting mutated array`, owners);

//Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//return < 0 ,keep order (A,B)=> A is smaller than B (A<B) and A-B will be negative
//return > 0, switch order (B,A)=>A is greater than B (A>B) and A-B will be positive
//a-b is the equation that resembles above characteristics
//Ascending Order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// movements.sort((a, b) => a - b);

// console.log(`Ascending Order`, movements);

//Descending Order

//return < 0 ,(A,B)=> A>B B-A will be negative
//return > 0,(B,A)=> B>A B-A will be positive

// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });

// movements.sort((a, b) => b - a);
// console.log(`Descending Order`, movements);
