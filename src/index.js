import BaseballGame from './BaseballGame.js';

const baseballGame = new BaseballGame();

const validateNumber = userInput => {
  if (userInput.match(/[0-9]/g).length !== 3) {
    alert('잘못된 값을 입력하셨습니다.');
    return false;
  }
  return true;
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
  randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
};

const submitButtonClickHandler = event => {
  if (!validateNumber()) {
    userInput.value = '';
    userInput.focus();
  }
  baseballGame.play(randomNumber.join(''), userInput.value);
  resultMessage.innerHTML = baseballGame.announceBallState();
  if (baseballGame.isWin()) {
    userInput.focus();
    restartButton.style.display = 'block';
  }
};

const activateSubmitButton = () => {
  submitButton.addEventListener('click', submitButtonClickHandler);
};

restartButton.addEventListener('click', event => {
  init();
});

init();
