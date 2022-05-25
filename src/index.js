import BaseballGame from './domain/BaseballGame.mjs';

const input = document.querySelector('#user-input');
const result = document.querySelector('#result');
const submitBtn = document.querySelector('#submit');

new BaseballGame(input, result, submitBtn);
