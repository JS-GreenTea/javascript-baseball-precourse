import BaseballGame from './BaseballGame.js';
import Render from './Render.js';
import { validateNumber, $ } from './util';

const userInput = $('#user-input');

const baseballGame = new BaseballGame();
const render = new Render(baseballGame);

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

const submitButtonClickHandler = event => {
  event.preventDefault();
  if (!validateNumber(userInput.value)) {
    userInput.value = '';
    userInput.focus();
  }
  let gameResultToString = baseballGame.play(
    randomNumber.join(''),
    userInput.value,
  );
  render.gameResult(gameResultToString);
};

const restartGame = () => {
  render.gameReset();
  randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
};

$('#submit').addEventListener('click', submitButtonClickHandler);
$('#game-restart-button').addEventListener('click', event => {
  restartGame();
});

restartGame();
