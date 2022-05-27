import Computer from "./computer.js";
import Player from "./player.js";
import BaseballGame from "./baseballgame.js";

const computer = new Computer();
const player = new Player();
const baseballGame = new BaseballGame();

document.getElementById("game-restart-button").style.display = "none";

const onClick = (e) => {
  e.preventDefault();
  player.getNumberByInputTag();
  baseballGame.renderResult(baseballGame.play(computer.number, player.number));
};

document.getElementById("submit").addEventListener("click", onClick);
document.getElementById("game-restart-button").addEventListener("click", () => {
  window.location.reload();
});
