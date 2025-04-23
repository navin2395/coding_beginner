
let words ="My name is John Doe";

//console.log(words); // My name is John Doe

let wordsArray = words.split(" ");
console.log(wordsArray); // [ 'My', 'name', 'is', 'John', 'Doe' ]

// let wordsArray2 = words.split(" ", 3);
// console.log(wordsArray2); // [ 'My', 'name', 'is' ]

let [firstWord, secondWord,,...restWords] = wordsArray;
console.log(firstWord); // My
console.log(restWords);

