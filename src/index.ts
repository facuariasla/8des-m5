import "./components/button/index";
import "./components/hands/index";
import "./components/loader"
import { initRouter } from "./router";
import { state } from "./state";


(function () {
  state.init();
  const root = document.querySelector(".root");
  const style = document.createElement("style");
  const imgUrl = require("url:./assets/fondo.svg");
  style.innerHTML = `
  body{ 
    background: url(${imgUrl})
    center fixed;
    background-size: cover;
  }
  `;
  initRouter(root);
  root.appendChild(style);
})();