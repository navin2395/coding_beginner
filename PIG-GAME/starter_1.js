'use strict';

//score element intialized and other dom elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const dice2El = document.querySelector('.dice2');
const counter0El = document.getElementById('count--0');
const counter1El = document.getElementById('count--1');
const btnroll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const playeractive = document.querySelector('.player--active');

//starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
dice2El.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0; //initially start with player-1
let totalScore = [0, 0]; //initially total score of player1 and player2 is zero
let counter = [0, 0];
let playing = true;
const maxrolls = 10;

function toggle_players() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

function winner_declare(winner) {
  playing = false;
  diceEl.classList.add('hidden');
  dice2El.classList.add('hidden');
  document.querySelector(`.player--${winner}`).classList.add('player--winner');
  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');

  if (winner === 0) {
    score0El.textContent = `Player 1 won with score of ${totalScore[winner]} `;
    winner = 1;
    console.log(winner);
    score1El.textContent = `${totalScore[`${winner}`]}`;
  } else {
    score1El.textContent = `Player 2 won with score of ${totalScore[winner]}`;
    winner = 0;
    console.log(winner);
    score0El.textContent = `${totalScore[`${winner}`]}`;
  }
}
function checkEndgame() {
  if (counter[0] >= maxrolls && counter[1] >= maxrolls) {
    const winner =
      totalScore[0] === totalScore[1]
        ? null
        : totalScore[0] > totalScore[1]
        ? 0
        : 1;
    if (winner === null) {
      score0El.textContent = 'Draw';
      score1El.textContent = 'Draw';
    } else {
      winner_declare(winner);
    }
  }
}
//Dice roll Functionality

btnroll.addEventListener('click', function () {
  if (!playing || counter[`${activePlayer}`] >= maxrolls) return;

  // 1.Generating a Random Dice Roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice, typeof dice);

  let dice2 = Math.trunc(Math.random() * 6) + 1;
  console.log(dice2, typeof dice2);

  //1 display the counter
  counter[`${activePlayer}`]++;
  console.log('counter:', counter[`${activePlayer}`]);
  activePlayer === 0
    ? (counter0El.textContent = counter[`${activePlayer}`])
    : (counter1El.textContent = counter[`${activePlayer}`]);

  // 2.display the dice roll

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  dice2El.classList.remove('hidden');
  dice2El.src = `dice-${dice2}.png`;
  //both are 1 instant loss
  if (dice === 1 && dice2 === 1) {
    const winner = activePlayer === 0 ? 1 : 0;
    winner_declare(winner);
    return;
  }
  if (dice !== 1 || dice2 !== 1) {
    currentScore += dice + dice2;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }

  if (counter[`${activePlayer}`] >= maxrolls) {
    totalScore[`${activePlayer}`] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    toggle_players();
    checkEndgame();
  }
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

    counter[`${activePlayer}`]++;
    document.getElementById(`count--${activePlayer}`).textContent =
      counter[`${activePlayer}`];
    toggle_players();
    checkEndgame();
  }

  //2.Checking current score>100 or not ,finsh the game

  // if (totalScore[`${activePlayer}`] >= 10000) {
  //   activePlayer === 0
  //     ? (score0El.textContent = 'Player 1 won')
  //     : (score1El.textContent = 'player 2 won');
  //   if (activePlayer === 0) {
  //     player0El.classList.add('player--winner');
  //     player0El.classList.remove('player--active');
  //   } else {
  //     player1El.classList.add('player--winner');
  //     player1El.classList.remove('player--active');
  //   }
  //   playing = false;
  //   diceEl.classList.add('hidden');
});
//new Button Functionality
btnNew.addEventListener('click', function () {
  currentScore = 0;
  score0El.textContent = currentScore;
  score1El.textContent = currentScore;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  counter0El.textContent = currentScore;
  counter1El.textContent = currentScore;

  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  totalScore = [0, 0];
  playing = true;
  activePlayer = 0;
  counter = [0, 0];
});

function endgame() {
  playing = false;
  diceEl.classList.add('hidden');
  dice2El.classList.add('hidden');
  if (totalScore[0] > totalScore[1]) {
    score0El.textContent = 'Player 1 won';
    player0El.classList.add('player--winner');
  } else if (totalScore[1] > totalScore[0]) {
    score1El.textContent = 'Player 2 won';
    player1El.classList.add('player--winner');
  } else {
    score0El.textContent = 'Draw';
    score1El.textContent = 'Draw';
  }
}
