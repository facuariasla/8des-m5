function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequire07c3;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire07c3=s),s.register("bXuNP",(function(t,n){var i,s;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>s),(e=>s=e));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("bXuNP").register(JSON.parse('{"5cfsh":"index.32b40c46.js","8Sivs":"fig-rock.5753bd08.svg","4gKIo":"fig-note.42a90b98.svg","79w9x":"fig-scissors.c30bb30b.svg","5QN4U":"hand-piedra.c88f7ccf.svg","lfUv2":"hand-papel.5f79bbf0.svg","jiPgx":"hand-tijera.6a2fdda1.svg","g76Yq":"perdiste.9846907e.svg","kl4bc":"ganaste.a5669fde.svg","fMkv3":"empate.7126a939.png","61FgG":"fondo.16e5a564.svg"}'));class r extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML='\n      .button-container{\n          display: flex;\n          justify-content: center;\n          align-items: center;\n      }\n      button{\n        min-width: 230px;\n        height: 60px;\n        color: white;\n        font-size: 40px;\n        background-color: #006cfc;\n        border: 6px solid #001997;\n        border-radius: 5px;\n        font-family: "Odibee Sans", cursive;\n      }\n        button:active {\n        box-shadow: 7px 6px 15px 1px rgba(0, 0, 0, 0.24);\n        transform: translateY(4px);\n        background-color: #368af8;\n      }\n    ',this.shadow.appendChild(e)}render(){const e=document.createElement("div"),t=document.createElement("button");return t.setAttribute("class","home"),e.setAttribute("class","button-container"),e.appendChild(t),this.shadow.appendChild(e),"/8des-m5/home"==location.pathname?t.textContent="Empezar":"/instructions"==location.pathname?t.textContent="Jugar!":void(t.textContent="Volver a jugar")}}customElements.define("custom-button",r),s.register("5q1Ym",(function(e,t){e.exports=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("8Sivs")})),s.register("kPq84",(function(t,n){var i;e(t.exports,"getBundleURL",(()=>i),(e=>i=e));var s={};function r(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=s[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),s[e]=t),t}})),s.register("k6XkU",(function(e,t){e.exports=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("4gKIo")})),s.register("6gA5h",(function(e,t){e.exports=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("79w9x")}));class a extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML="\n        .custom-container {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-around;\n            align-items: center;\n            margin-top: 15vh;\n            min-width: 370px;\n        }\n        .custom-button.{\n          background-color:rgba(0, 0, 0, 0.05);\n          padding: 5px;\n        }\n              \n      ",this.shadow.appendChild(e)}render(){const e=s("5q1Ym"),t=s("k6XkU"),n=s("6gA5h"),i=document.createElement("div");i.setAttribute("class","custom-container");const r=document.createElement("button");r.setAttribute("id","piedra"),r.setAttribute("class","custom-button");const a=document.createElement("img");a.setAttribute("src",e),r.appendChild(a);const o=document.createElement("button");o.setAttribute("class","custom-button"),o.setAttribute("id","papel");const c=document.createElement("img");c.setAttribute("src",t),o.appendChild(c);const d=document.createElement("button");d.setAttribute("class","custom-button"),d.setAttribute("id","tijera");const l=document.createElement("img");l.setAttribute("src",n),d.appendChild(l),i.appendChild(r),i.appendChild(o),i.appendChild(d),this.shadow.appendChild(i),r.addEventListener("click",(e=>{let t;t=""==e.path[1].id?e.path[0].id:e.path[1].id;const n=new CustomEvent("clicked",{detail:{play:t}});this.dispatchEvent(n)})),o.addEventListener("click",(e=>{let t;t=""==e.path[1].id?e.path[0].id:e.path[1].id;const n=new CustomEvent("clicked",{detail:{play:t}});this.dispatchEvent(n)})),d.addEventListener("click",(e=>{let t;t=""==e.path[1].id?e.path[0].id:e.path[1].id;const n=new CustomEvent("clicked",{detail:{play:t}});this.dispatchEvent(n)}))}}customElements.define("custom-hands",a);class o extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML="\n    \n    .loader-container{\n      display: grid;\n      grid-template-columns: 1fr;\n      justify-content: center;\n      justify-items: center;\n      align-items: center;\n      height: 190px;\n    }\n    \n    .number-container{\n      width: 150px;\n      height: 150px;\n      border: 10px solid black;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: 50%;\n      font-family: 'Odibee Sans', cursive;}\n    \n    .number-loader{\n      font-size: 72px;\n      margin: 0;\n    }\n    ",this.shadow.appendChild(e)}render(){const e=document.createElement("div");e.setAttribute("class","loader-container");const t=document.createElement("div");t.setAttribute("class","number-container");const n=document.createElement("div");n.setAttribute("class","number-loader"),n.innerText="1",e.appendChild(t),t.appendChild(n),this.shadow.appendChild(e),setInterval((()=>{let e=1;3==e?clearInterval():(e+=1,n.innerText=e)}),1e3),setTimeout((()=>{t.style.display="none"}),3100)}}customElements.define("custom-loader-s",o);var c;c=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("5QN4U");var d;d=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("lfUv2");var l;l=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("jiPgx");const p={data:{gameState:{yourPlay:"",machinePlay:""}},winner:{player:0,machine:0},listeners:[],init(){const e=localStorage.getItem("history");if(null!=e)return p.saveHistory(JSON.parse(e));localStorage.setItem("history",JSON.stringify(this.winner))},getState(){return this.data},getHistory(){return this.winner},setGame(e,t){const n=this.getState();n.gameState.yourPlay=e,n.gameState.machinePlay=t,this.setState(n)},whoWins(e,t){const n=[{myPlay:"piedra",computerPlay:"tijera"},{myPlay:"tijera",computerPlay:"papel"},{myPlay:"papel",computerPlay:"piedra"}];let i="perdiste";for(const s of n)s.myPlay==e&&s.computerPlay==t?i="ganaste":e==t&&(i="empate");return this.setWinner((e=>{if("empate"!=e)return"ganaste"==e||"perdiste"==e?e:void 0})(i)),i},setState(e){this.data=e;for(const e of this.listeners)e();localStorage.setItem("games",JSON.stringify(e))},setWinner(e){if(null!=e)return"ganaste"==e?(this.winner.player++,this.saveHistory(this.winner)):"perdiste"==e?(this.winner.machine++,this.saveHistory(this.winner)):void 0},saveHistory(e){this.winner=e,localStorage.setItem("history",JSON.stringify(e))}};var u;u=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("g76Yq");var h;h=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("kl4bc");var m;function g(e,t){const n=[{path:/\/home/,handler:e=>{!function(e){const t=document.createElement("div");t.setAttribute("class","container");const n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML="\n  .container{\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 30% 20%;\n    justify-items: center;\n    align-items: center;\n    gap: 10px;\n    }\n  .main-title {\n    font-size: 80px;\n    color: #009048;\n    font-family: 'Special Elite', cursive;\n    text-align: center;\n    margin: 0;\n    padding-top: 60px;\n    } \n  @media(min-width: 768px){\n    .main-title{\n      font-size: 90px;\n    }\n  }\n  .three-hand{\n    position: fixed;\n    bottom: 0;\n    align-self: end;\n  }\n  .hand{\n    height: 150px;\n    padding: 10px;\n  }\n  ",t.innerHTML=`\n  <h1 class="main-title">Piedra,<br> Papel o <br> Tijera</h1>\n  <custom-button></custom-button>\n  <div class="three-hands">\n    <img class="hand" id="rock" src="${c}" alt="hand">\n    <img class="hand" id="paper" src="${d}" alt="paper">\n    <img class="hand" id="scissors" src="${l}" alt="scissors">\n    </div>\n  </div>\n  `,e.appendChild(t),document.querySelector("custom-button").addEventListener("click",(()=>{f(e,"/instructions")})),e.appendChild(n)}(e)}},{path:/\/instructions/,handler:e=>{!function(e){const t=document.createElement("div");t.setAttribute("class","container");const n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML="\n    .container{\n      height: 100vh;\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 30% 20%;\n      justify-items: center;\n      align-items: center;\n      gap: 10px;\n    } \n    .main-title {\n      font-size: 40px;\n      padding: 0 10%;\n      color: #000;\n      font-family: 'Special Elite', cursive;\n      text-align: center;\n      margin: 0;\n      padding-top: 60px;\n    }\n    @media(min-width: 768px){\n    .rules{\n      font-size: 58px;\n      padding: 0 50px;\n      }\n    }\n    .three-hand{\n    position: fixed;\n    bottom: 0;\n    align-self: end;\n    }\n   .hand{\n    height: 150px;\n    padding: 10px;\n    }",t.innerHTML=`\n    <h1 class="main-title">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>\n\n    <custom-button></custom-button>\n    <div class="three-hands">\n      <img class="hand" id="rock" src="${c}" alt="hand">\n      <img class="hand" id="paper" src="${d}" alt="paper">\n      <img class="hand" id="scissors" src="${l}" alt="scissors">\n      </div>\n    </div>\n    `,e.appendChild(t),document.querySelector("custom-button").addEventListener("click",(()=>{f(e,"/game")})),e.appendChild(n)}(e)}},{path:/\/game/,handler:e=>{!function(e){const t=document.createElement("div");t.setAttribute("class","container");const n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML="\n    .container{\n      height: 100vh;\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr ;\n      justify-items: center;\n      align-items: center;\n      gap: 10px;\n    }\n\n    ";const i=document.createElement("custom-loader-s");t.appendChild(i);const s=document.createElement("custom-hands");e.appendChild(t),t.appendChild(s),e.appendChild(n),s.addEventListener("clicked",(t=>{const n=t.detail.play,i=["piedra","papel","tijera"][Math.floor(3*Math.random())];p.setGame(n,i),f(e,"/show-moves")})),setTimeout((()=>{if("/show-moves"!=location.pathname)return"/game"==location.pathname?window.alert("Selecciona Piedra, Papel o Tijera!!"):void 0}),4100)}(e)}},{path:/\/show-moves/,handler:e=>{!function(e){const t=document.createElement("div");t.setAttribute("class","container");const n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML="\n    .container{\n        width: 100%;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-around;\n    }\n    div.machine-container{\n        width: 200px;\n        height: 200px;\n        transform: rotate(180deg);\n    }\n    div.player-container{\n        width: 200px;\n        height: 300px;\n    }\n  ";const i=s("5q1Ym"),r=s("k6XkU"),a=s("6gA5h"),o=p.getState(),c=o.gameState.machinePlay,d=o.gameState.yourPlay;var l;t.innerHTML=`\n  <div class="machine-container">\n  <img width="200px" height="250px" src=${l=c,"piedra"==l?i:"papel"==l?r:"tijera"==l?a:void 0}>\n  </div>\n  <div class="player-container">\n  <img width="200px" height="250px" src="${(e=>"piedra"==e?i:"papel"==e?r:"tijera"==e?a:void 0)(d)}">\n  </div>\n  `,e.appendChild(n),e.appendChild(t),setTimeout((()=>{f(e,"/result")}),2800)}(e)}},{path:/\/result/,handler:e=>{!function(e){const t=document.createElement("div");t.setAttribute("class","container");const n=document.createElement("style");n.setAttribute("class","style"),n.innerHTML="\n  .container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 50% 1fr 1fr;\n    justify-items: center;\n    height: 100vh;\n  }\n\n  .star {\n    height: 250px;\n  }\n  .star-content{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    justify-content: center;\n    padding-top:10px;\n  }\n\n  .empate, .ganaste, .perdiste{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 50% 1fr 1fr;\n    justify-items: center;\n    height: 100vh;\n  }\n\n  \n  .score-board {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    margin-top: 5px;\n    border: solid 2px #000;\n    width: 90%;\n    background-color: rgb(226, 226, 226);\n    box-shadow: 2px 8px 15px 1px rgba(11, 12, 10, 0.5);\n  }\n  @media(max-width: 450px){\n    .score-board{\n      width: 300px;\n      grid-template-rows: 1fr 1fr 1fr;\n    }\n  }\n  \n  .score-board > h3, h4{\n    margin: 10px;\n    color: #000;\n    font-size: 32px;\n  }\n  .score-board > h4{\n      margin-right: 5%;\n  }\n  @keyframes flicker {\n     \n   0%, 18%, 22%, 25%, 53%, 57%, 100% \n   \n    20%, 24%, 55% {        \n       text-shadow: none;\n    }    \n   }\n   custom-button {\n       margin-top: 10%;\n   }\n  ";const i=p.getState(),s=p.whoWins(i.gameState.yourPlay,i.gameState.machinePlay),r=p.getHistory(),a=document.createElement("div");var o;a.innerHTML=`\n  <div class="star-content">\n    <img class="star" src="${"ganaste"==s?h:"perdiste"==s?u:m}"">\n  </div>\n\n  <div class="score-board">\n    <h3>Resultados</h3>\n    <h4>Vos ${r.player}</h4>\n    <h4>Bot ${r.machine}</h4>\n  </div>\n  `,"ganaste"==(o=s)?a.setAttribute("class","ganaste"):"perdiste"==o?a.setAttribute("class","perdiste"):"empate"==o&&a.setAttribute("class","empate");const c=document.createElement("custom-button");a.appendChild(c),c.addEventListener("click",(()=>{f(e,"/game")})),e.appendChild(n),t.appendChild(a),e.appendChild(t)}(e)}}];t.firstChild&&(t.removeChild(document.querySelector(".container")),t.removeChild(document.querySelector(".style")));for(const i of n)i.path.test(e)&&i.handler(t)}function f(e,t){history.pushState({},"",t),g(t,e)}m=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("fMkv3"),window.addEventListener("load",(()=>{f(document.querySelector(".root"),"/8des-m5/home")})),s.register("fIJYJ",(function(e,t){e.exports=s("kPq84").getBundleURL("5cfsh")+s("bXuNP").resolve("61FgG")})),function(){p.init();const e=document.querySelector(".root"),t=document.createElement("style"),n=s("fIJYJ");var i;t.innerHTML=`\n  body{ \n    background: url(${n})\n    center fixed;\n    background-size: cover;\n  }\n  `,i=e,location.host.includes("github.io")?f(i,"/8des-m5/home"):g(location.pathname,i),e.appendChild(t)}();
//# sourceMappingURL=index.32b40c46.js.map
