import BaseballGame from './domain/BaseballGame.mjs';
import { DOM_ID } from './constants.mjs';

const inputView = document.getElementById(DOM_ID.INPUT);
const resultView = document.getElementById(DOM_ID.RESULT);
const submitBtn = document.getElementById(DOM_ID.SUBMIT);

new BaseballGame(inputView, resultView, submitBtn);
