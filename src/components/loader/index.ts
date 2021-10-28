class CustomLoader extends HTMLElement {
  shadow: ShadowRoot;

  constructor(){
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback(){
    this.render();
    const style = document.createElement("style");

    style.innerHTML = `
    
    .loader-container{
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      justify-items: center;
      align-items: center;
      height: 190px;
    }
    
    .number-container{
      width: 150px;
      height: 150px;
      border: 10px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-family: 'Odibee Sans', cursive;}
    
    .number-loader{
      font-size: 72px;
      margin: 0;
    }
    `;
    this.shadow.appendChild(style);
  }
  render(){
    const $div = document.createElement("div");
    $div.setAttribute("class", "loader-container");

    const $div2 = document.createElement("div");
    $div2.setAttribute("class", "number-container");

    const $numberP = document.createElement("div");
    $numberP.setAttribute("class", "number-loader");
    $numberP.innerText = "1";

    $div.appendChild($div2);
    $div2.appendChild($numberP);

    this.shadow.appendChild($div);
  
      setInterval(() => {
        let counter: any = 1;

        if (counter == 3) {
          clearInterval();
        } else {
          counter += 1;
          $numberP.innerText = counter;
        }
      }, 1000);
  
      setTimeout(() => {
        $div2.style.display = "none"
      }, 3100);
  }
}

customElements.define("custom-loader-s", CustomLoader);