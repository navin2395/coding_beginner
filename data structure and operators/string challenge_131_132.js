'strict mode';

// /*
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
// */
// /* SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅ */

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const words = text.split('\n');
//   const wordsLower = [];
//   let index = 0;
//   for (let [key, lowerCase] of words.entries()) {
//     const [firstPart, secondPart] = lowerCase.toLowerCase().trim().split('_');
//     const output = `${firstPart}${secondPart.replace(
//       secondPart[0],
//       secondPart[0].toUpperCase()
//     )}`;
//     const finalOutput = `${output.padEnd(20, ' ')}${'👉'.repeat(`${key + 1}`)}`;

//     console.log(finalOutput);
//     index++;
//   }
// });

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.includes('Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;

  console.log(output.padStart(44, ' '));
  // console.log(output.length);
}
