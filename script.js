'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🤦‍♂️ Enter the number!';
  }
});
