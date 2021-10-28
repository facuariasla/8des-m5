import { initHomePage } from "./pages/home/index";
import { initInstructionsPage } from "./pages/instructions/index";
import { initGamePage } from "./pages/game/index";
import { initShowMovesPage } from "./pages/show-moves/index";
import { initResultPage } from "./pages/result/index";

function routeHandler(path, container) {
  const routes = [
    {
      path: /\/home/,
      handler: (container) => {
        initHomePage(container);
      },
    },
    {
      path: /\/instructions/,
      handler: (container) => {
        initInstructionsPage(container);
      },
    },
    {
      path: /\/game/,
      handler: (container) => {
        initGamePage(container);
      },
    },
    {
      path: /\/show-moves/,
      handler: (container) => {
        initShowMovesPage(container);
      },
    },
    {
      path: /\/result/,
      handler: (container) => {
        initResultPage(container);
      },
    },
  ];
  if (container.firstChild) {
    container.removeChild(document.querySelector(".container"));
    container.removeChild(document.querySelector(".style"));
  }
  for (const r of routes) {
    if (r.path.test(path)) {
      r.handler(container);
    }
  }
}

export function goTo(container: Element, path) {
  history.pushState({}, "", path);
  routeHandler(path, container);
}

export function initRouter(container: Element) {
  if (location.host.includes("github.io")) {
      goTo(container, "/8des-m5/home");
  } else {
    routeHandler(location.pathname, container);
  }
}

window.addEventListener("load", () => {
  const test = document.querySelector(".root");
  goTo(test, "/8des-m5/home");
});