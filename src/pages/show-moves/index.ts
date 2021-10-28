import { goTo } from "../../router";
import { state } from "../../state";
export function initShowMovesPage(containerEl: Element) {
  const div = document.createElement("div");
  div.setAttribute("class", "container");
  const style = document.createElement("style");
  style.setAttribute("class", "style");
  style.innerHTML = `
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    div.machine-container{
        width: 200px;
        height: 200px;
        transform: rotate(180deg);
    }
    div.player-container{
        width: 200px;
        height: 300px;
    }
  `;

  const piedraImg = require("url:../../assets/fig-rock.svg");
  const papelImg = require("url:../../assets/fig-note.svg");
  const tijerasImg = require("url:../../assets/fig-scissors.svg");

  //obtengo la jugada
  const play = state.getState();
  const computerPlay = play.gameState.machinePlay;
  const playerPlay = play.gameState.yourPlay;

  //selecciono la jugada y la muestro
  const machineImgSelector = (machinePlay) => {
    if (machinePlay == "piedra") return piedraImg;
    if (machinePlay == "papel") return papelImg;
    if (machinePlay == "tijera") return tijerasImg;
  };
  const palyerImgSelector = (playerPlay) => {
    if (playerPlay == "piedra") return piedraImg;
    if (playerPlay == "papel") return papelImg;
    if (playerPlay == "tijera") return tijerasImg;
  };

  div.innerHTML = `
  <div class="machine-container">
  <img width="200px" height="250px" src=${machineImgSelector(computerPlay)}>
  </div>
  <div class="player-container">
  <img width="200px" height="250px" src="${palyerImgSelector(playerPlay)}">
  </div>
  `;
  containerEl.appendChild(style);
  containerEl.appendChild(div);

  setTimeout(() => {
    goTo(containerEl, "/result");
  }, 2800);
}