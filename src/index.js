import BaseballGame from './BaseballGame.js';
import Render from './Render.js';
import { validateNumber, $ } from './util';

const userInput = $('#user-input');

const baseballGame = new BaseballGame();
const render = new Render(baseballGame);

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
