import { goTo } from "../../router";
const handRock = require("url:../../assets/hand-piedra.svg");
const handPaper = require("url:../../assets/hand-papel.svg");
const handScissors = require("url:../../assets/hand-tijera.svg");

export function initInstructionsPage(containerEl: Element) {
  const div = document.createElement("div");
  div.setAttribute("class", "container");

  const style = document.createElement("style");
  style.setAttribute("class", "style");
  style.innerHTML = `
    .container{
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 30% 20%;
      justify-items: center;
      align-items: center;
      gap: 10px;
    } 
    .main-title {
      font-size: 40px;
      padding: 0 10%;
      color: #000;
      font-family: 'Special Elite', cursive;
      text-align: center;
      margin: 0;
      padding-top: 60px;
    }
    @media(min-width: 768px){
    .rules{
      font-size: 58px;
      padding: 0 50px;
      }
    }
    .three-hand{
    position: fixed;
    bottom: 0;
    align-self: end;
    }
   .hand{
    height: 150px;
    padding: 10px;
    }`;

  div.innerHTML = `
    <h1 class="main-title">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>

    <custom-button></custom-button>
    <div class="three-hands">
      <img class="hand" id="rock" src="${handRock}" alt="hand">
      <img class="hand" id="paper" src="${handPaper}" alt="paper">
      <img class="hand" id="scissors" src="${handScissors}" alt="scissors">
      </div>
    </div>
    `;

  containerEl.appendChild(div);
  const $bttn = document.querySelector("custom-button")
  $bttn.addEventListener("click", () => {
    goTo(containerEl, "/game");
  });
  containerEl.appendChild(style);
}