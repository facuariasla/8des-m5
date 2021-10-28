import { goTo } from "../../router";
import { state } from "../../state";
const starRed = require("url:../../assets/perdiste.svg")
const starGreen = require("url:../../assets/ganaste.svg")
const starYellow = require("url:../../assets/empate.png")


export function initResultPage(containerEl: Element) {
  const div = document.createElement("div");
  div.setAttribute("class", "container");
  const style = document.createElement("style");
  style.setAttribute("class", "style");
  style.innerHTML = `
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50% 1fr 1fr;
    justify-items: center;
    height: 100vh;
  }

  .star {
    height: 250px;
  }
  .star-content{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    padding-top:10px;
  }

  .empate, .ganaste, .perdiste{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50% 1fr 1fr;
    justify-items: center;
    height: 100vh;
  }

  
  .score-board {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-top: 5px;
    border: solid 2px #000;
    width: 90%;
    background-color: rgb(226, 226, 226);
    box-shadow: 2px 8px 15px 1px rgba(11, 12, 10, 0.5);
  }
  @media(max-width: 450px){
    .score-board{
      width: 300px;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
  
  .score-board > h3, h4{
    margin: 10px;
    color: #000;
    font-size: 32px;
  }
  .score-board > h4{
      margin-right: 5%;
  }
  @keyframes flicker {
     
   0%, 18%, 22%, 25%, 53%, 57%, 100% 
   
    20%, 24%, 55% {        
       text-shadow: none;
    }    
   }
   custom-button {
       margin-top: 10%;
   }
  `;

  const currentState = state.getState();
  const playsResult = state.whoWins(
    currentState.gameState.yourPlay,
    currentState.gameState.machinePlay
  );

  const history = state.getHistory();
  
  function resultsValues (){
    if(playsResult == "ganaste"){
      return starGreen;
    } else if (playsResult == "perdiste") {
      return starRed;
    } else {
      return starYellow;
    }
  }
  

  const resultContainer = document.createElement("div");
  resultContainer.innerHTML = `
  <div class="star-content">
    <img class="star" src="${resultsValues()}"">
  </div>

  <div class="score-board">
    <h3>Resultados</h3>
    <h4>Vos ${history.player}</h4>
    <h4>Bot ${history.machine}</h4>
  </div>
  `;



  function showResult(result) {
    if (result == "ganaste")
      return resultContainer.setAttribute("class", "ganaste");
    if (result == "perdiste")
      return resultContainer.setAttribute("class", "perdiste");
    if (result == "empate")
      return resultContainer.setAttribute("class", "empate");
  }

  showResult(playsResult);

  const custombttn = document.createElement("custom-button");
  resultContainer.appendChild(custombttn);

  custombttn.addEventListener("click", () => {
    goTo(containerEl, "/game");
  });
  //state.whoWins();
  containerEl.appendChild(style);
  div.appendChild(resultContainer);
  containerEl.appendChild(div);
}