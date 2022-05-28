import BaseballGame from './BaseballGame.js';

const baseballGame = new BaseballGame();

const validateNumber = userInput => {
  if (typeof userInput !== 'number') {
    alert('잘못된 값을 입력하셨습니다.');
    return false;
  }
};

const submitButton = document.getElementById('submit');
const userInput = document.getElementById('user-input');
const resultMessage = document.getElementById('result');
const restartButton = document.getElementById('game-restart-button');
let randomNumber = [];

const init = () => {
  resultMessage.innerText = '';
  restartButton.style.display = 'none';
  activateSubmitButton();
  randomNumber = Random.pickUniqueNumbersInRange(1, 9, 3);
};

const submitButtonClickHandler = event => {
  if (!validateNumber()) {
    userInput.value = '';
    userInput.focus();
  }
  baseballGame.play(randomNumber.join(), userInput.value);
};

const activateSubmitButton = () => {
  submitButton.addEventListener('click', submitButtonClickHandler);
};

restartButton.addEventListener('click', event => {
  init();
});

init();
