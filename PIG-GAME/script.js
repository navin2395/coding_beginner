'use strict';

//score element intialized
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const playeractive = document.querySelector('.player--active');

//starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0; //initially start with player-1
let totalScore = [0, 0]; //initially total score of player1 and player2 is zero
let playing = true;

function toggle_players() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//Dice roll Functionality

btnroll.addEventListener('click', function () {
  if (playing) {
    // 1.Generating a Random Dice Roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice, typeof dice);

    // 2.display the dice roll

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      //if true dice roll must add to current score
      currentScore += dice;

      console.log(currentScore);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //
      // document
      //   .querySelector(`.player--${activePlayer}`)  //replacement code of toogle
      //   .classList.remove('player--active');

      // activePlayer = activePlayer === 0 ? 1 : 0;
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.add('player--active');                //replacement code of toggle

      // currentScore = 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      toggle_players();
    }
  }

  //Switch Player
});
//dice hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    //1.Add current score to active player score

    totalScore[`${activePlayer}`] += currentScore;
    console.log(totalScore);
    activePlayer === 0
      ? (score0El.textContent = totalScore[`${activePlayer}`])
      : (score1El.textContent = totalScore[`${activePlayer}`]);
    //2.Checking current score>100 or not ,finsh the game
    if (totalScore[`${activePlayer}`] >= 20) {
      activePlayer === 0
        ? (score0El.textContent = 'Player 1 won')
        : (score1El.textContent = 'player 2 won');
      if (activePlayer === 0) {
        player0El.classList.add('player--winner');
        player0El.classList.remove('player--active');
      } else {
        player1El.classList.add('player--winner');
        player1El.classList.remove('player--active');
      }
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      //3.Switching Players
      toggle_players();
    }
  }
});

btnNew.addEventListener('click', function () {
  currentScore = 0;
  score0El.textContent = currentScore;
  score1El.textContent = currentScore;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  player0El.classList.add('player--active');

  totalScore = [0, 0];
  playing = true;
  activePlayer = 0;
});
