'use strict';

// console.log(document.querySelector('.message').textContent); //changes text content of class message to correct Number
//document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 13; //changes text content of class number to 13

console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = 20; //changes text content of class score to 20

//document.querySelector('.guess').value = 23; //take input number with class guess as 23
// console.log(document.querySelector('.guess').value);
let score = 20; //initialize strating score as 20;
let highscore = 0;

let SecretNumber = Math.trunc(Math.random() * 20) + 1; //to create number between 1 and 20
console.log(SecretNumber, typeof SecretNumber);
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  //function to execute on click event
  const guess = Number(document.querySelector('.guess').value); //varible given value of input number/guess

  console.log(guess, typeof guess);

  //when no number is entered
  if (!guess)
    console.log((document.querySelector('.message').textContent = 'No number'));
  //when secretnumber is equal to guess number
  else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = ' Yipee Right Number ';
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      //execute too high/low when score >1 to limit score to 1 after 19 clicks
      document.querySelector('.message').textContent =
        guess > SecretNumber ? 'Too High' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0; //to get score 0 on 20th click and for so on clicks
    }
  }

  //when guess number is lower than Secret Number
  // else if (guess < SecretNumber) {
  //   if (score > 1) {
  //     //execute too low when score >1 to limit score to 1 after 19 clicks
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0; //to get score 0 on 20th click and so on
  //   }
  //when guess number is higher than Secret Number
  // } else if (guess > SecretNumber) {
  //   if (score > 1) {
  //     //execute too high when score > 1 to limit score to 1 after 19 clicks
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0; //to get score 0 on 20th click and so on
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
