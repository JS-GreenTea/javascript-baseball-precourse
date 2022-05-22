import BaseballGame from './domain/BaseballGame.js';

const input = document.querySelector('#user-input');
const result = document.querySelector('#result');
const submitBtn = document.querySelector('#submit');

new BaseballGame(input, result, submitBtn);
