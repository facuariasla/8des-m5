class Button extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
    const style = document.createElement("style");
    style.innerHTML = `
      .button-container{
          display: flex;
          justify-content: center;
          align-items: center;
      }
      button{
        min-width: 230px;
        height: 60px;
        color: white;
        font-size: 40px;
        background-color: #006cfc;
        border: 6px solid #001997;
        border-radius: 5px;
        font-family: "Odibee Sans", cursive;
      }
        button:active {
        box-shadow: 7px 6px 15px 1px rgba(0, 0, 0, 0.24);
        transform: translateY(4px);
        background-color: #368af8;
      }
    `;
    this.shadow.appendChild(style);
  }
  render() {
    const buttonContainer = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("class", "home");
    buttonContainer.setAttribute("class", "button-container");
    buttonContainer.appendChild(button);
    this.shadow.appendChild(buttonContainer);

    if (location.pathname == "/8des-m5/home") {
      return (button.textContent = "Empezar");
    } else if (location.pathname == "/instructions") {
      return (button.textContent = "Jugar!");
    } else button.textContent = "Volver a jugar";
  }
}

customElements.define("custom-button", Button);