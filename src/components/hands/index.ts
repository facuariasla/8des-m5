class Hands extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    const style = document.createElement("style");

    style.innerHTML = `
        .custom-container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin-top: 15vh;
            min-width: 370px;
        }
        .custom-button.{
          background-color:rgba(0, 0, 0, 0.05);
          padding: 5px;
        }
              
      `;
    this.shadow.appendChild(style);
  }
  render() {
    const piedraImg = require("url:../../assets/fig-rock.svg");
    const papelImg = require("url:../../assets/fig-note.svg");
    const tijerasImg = require("url:../../assets/fig-scissors.svg");

    const div = document.createElement("div");
    div.setAttribute("class", "custom-container");

    const stone = document.createElement("button");
    stone.setAttribute("id", "piedra");
    stone.setAttribute("class", "custom-button");
    const piedra = document.createElement("img");
    piedra.setAttribute("src", piedraImg);
    stone.appendChild(piedra);

    const papper = document.createElement("button");
    papper.setAttribute("class", "custom-button");
    papper.setAttribute("id", "papel");
    const papel = document.createElement("img");
    papel.setAttribute("src", papelImg);
    papper.appendChild(papel);

    const sissors = document.createElement("button");
    sissors.setAttribute("class", "custom-button");
    sissors.setAttribute("id", "tijera");
    const tijeras = document.createElement("img");
    tijeras.setAttribute("src", tijerasImg);
    sissors.appendChild(tijeras);

    div.appendChild(stone);
    div.appendChild(papper);
    div.appendChild(sissors);

    this.shadow.appendChild(div);

    stone.addEventListener("click", (e: any) => {
      let id: string;
      if (e.path[1].id == "") {
        id = e.path[0].id;
      } else id = e.path[1].id;
      const event = new CustomEvent("clicked", {
        detail: {
          play: id,
        },
      });
      this.dispatchEvent(event);
    });
    papper.addEventListener("click", (e: any) => {
      let id: string;
      if (e.path[1].id == "") {
        id = e.path[0].id;
      } else id = e.path[1].id;
      const event = new CustomEvent("clicked", {
        detail: {
          play: id,
        },
      });
      this.dispatchEvent(event);
    });
    sissors.addEventListener("click", (e: any) => {
      let id: string;
      if (e.path[1].id == "") {
        id = e.path[0].id;
      } else id = e.path[1].id;
      const event = new CustomEvent("clicked", {
        detail: {
          play: id,
        },
      });
      this.dispatchEvent(event);
    });
  }
}
customElements.define("custom-hands", Hands);