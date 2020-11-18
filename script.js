'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let hightscore = 0;
let score = 20;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const scoreUpdate = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🤦‍♂️ Enter the number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > hightscore) {
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too Low!');
      score--;
      scoreUpdate(score);
    } else {
      displayMessage('💥 You lost!');
      scoreUpdate(0);
    }
  }
});
