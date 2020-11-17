'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

const scoreUpdate = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🤦‍♂️ Enter the number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      scoreUpdate(score);
    } else {
      document.querySelector('.message').textContent = '💥 You lost!';
      scoreUpdate(0);
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too Low!';
      score--;
      scoreUpdate(score);
    } else {
      document.querySelector('.message').textContent = '💥 You lost!';
      scoreUpdate(0);
    }
  }
});
