type Play = "stone" | "papper" | "sissors" | string;

const state = {
  data: {
    gameState: {
      yourPlay: "",
      machinePlay: "",
    },
  },
  winner: {
    player: 0,
    machine: 0,
  },
  listeners: [],
  init() {
    const history = localStorage.getItem("history");
    if (history == null) {
      localStorage.setItem("history", JSON.stringify(this.winner));
    } else return state.saveHistory(JSON.parse(history));
  },
  getState() {
    return this.data;
  },
  getHistory() {
    return this.winner;
  },
  // Guardo la jugada del jugador y de la maquina en el state
  setGame(playerPlay: Play, machinePlay: Play) {
    const lastState = this.getState();
    lastState.gameState.yourPlay = playerPlay;
    lastState.gameState.machinePlay = machinePlay;
    this.setState(lastState);
  },
  // Declara la lógica para saber quién ganó, y lo devuelve
  whoWins(playerPlay: Play, computerPlay: Play) {
    const winningOutcomes = [
      { myPlay: "piedra", computerPlay: "tijera" },
      { myPlay: "tijera", computerPlay: "papel" },
      { myPlay: "papel", computerPlay: "piedra" },
    ];

    let result = "perdiste";
    for (const o of winningOutcomes) {
      if (o.myPlay == playerPlay && o.computerPlay == computerPlay) {
        result = "ganaste";
      } else if (playerPlay == computerPlay) {
        result = "empate";
      }
    }

    const datos = (winner: string) => {
      if (winner == "empate") return;
      if (winner == "ganaste") return winner;
      if (winner == "perdiste") return winner;
    };
    this.setWinner(datos(result));
    return result;
  },
  setState(newstate: object) {
    this.data = newstate;
    for (const callback of this.listeners) {
      callback();
    }
    localStorage.setItem("games", JSON.stringify(newstate));
  },
  setWinner(winner) {
    if (winner == undefined) return;
    if (winner == "ganaste") {
      this.winner.player++;
      return this.saveHistory(this.winner);
    }
    if (winner == "perdiste") {
      this.winner.machine++;
      return this.saveHistory(this.winner);
    }
  },
  saveHistory(history) {
    this.winner = history;
    localStorage.setItem("history", JSON.stringify(history));
  },
};

export { state };