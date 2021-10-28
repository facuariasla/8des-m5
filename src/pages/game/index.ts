import { goTo } from "../../router";
import { state } from "../../state";

export function initGamePage(containerEl: Element) {
  const div = document.createElement("div");
  div.setAttribute("class", "container");

  const style = document.createElement("style");
  style.setAttribute("class", "style");
  style.innerHTML = `
    .container{
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr ;
      justify-items: center;
      align-items: center;
      gap: 10px;
    }

    `;
 

  const LoaderCustom = document.createElement("custom-loader-s");
  div.appendChild(LoaderCustom);


  const custombttn = document.createElement("custom-hands");
  containerEl.appendChild(div);


  div.appendChild(custombttn);
  
  containerEl.appendChild(style);

  // escucho el evento click
  custombttn.addEventListener("clicked", (e: any) => {
    const playerPlay = e.detail.play;

    // Genera una jugada random de la pc y la guardar en el state
    const randomResult = Math.floor(Math.random() * 3);
    const posibleMoves = ["piedra", "papel", "tijera"];
    const machinePlay = posibleMoves[randomResult];

    state.setGame(playerPlay, machinePlay);
    goTo(containerEl, "/show-moves");
  });

  //checkeo si el jugador selecciono
  setTimeout(() => {
    if (location.pathname == "/show-moves") return;
    if (location.pathname == "/game")
      return window.alert("Selecciona Piedra, Papel o Tijera!!");
  }, 4100);

}

