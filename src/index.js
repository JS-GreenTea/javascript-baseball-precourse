import BaseballGame from './domain/BaseballGame.mjs';

const inputView = document.querySelector('#user-input');
const resultView = document.querySelector('#result');
const submitBtn = document.querySelector('#submit');

new BaseballGame(inputView, resultView, submitBtn);
