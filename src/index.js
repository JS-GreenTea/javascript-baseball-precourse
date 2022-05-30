import BaseballGame from './BaseballGame.js';
import { validateNumber, $ } from './util';

const userInput = $('#user-input');

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

const restartGame = () => {
  resultMessage.innerText = '';
  userInput.value = '';
  restartButton.style.display = 'none';
  randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
};

const submitButtonClickHandler = event => {
  event.preventDefault();
  if (!validateNumber(userInput.value)) {
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

$('#submit').addEventListener('click', submitButtonClickHandler);
$('#game-restart-button').addEventListener('click', event => {
  restartGame();
});

restartGame();
