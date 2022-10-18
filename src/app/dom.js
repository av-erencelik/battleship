import { playRound } from "./game";

export function displayGameBoards() {
  const playerBoard = document.getElementById("playersBoard");
  const computerBoard = document.getElementById("computersBoard");
  const titlePlayer = document.getElementById("title1");
  const titleComputer = document.getElementById("title2");
  playerBoard.style.display = "grid";
  computerBoard.style.display = "grid";
  titlePlayer.style.display = "block";
  titleComputer.style.display = "block";
  setTimeout(function () {
    playerBoard.style.translate = "0px";
    computerBoard.style.translate = "0px";
    titlePlayer.style.translate = "0px";
    titleComputer.style.translate = "0px";
  }, 750);

  for (let i = 0; i < 100; i++) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.setAttribute("data-player-index", i);
    playerBoard.appendChild(tile);
  }
  for (let i = 0; i < 100; i++) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.setAttribute("data-computer-index", i);
    tile.classList.add("empty");
    tile.addEventListener(
      "click",
      () => {
        takeInputForAttack(tile);
      },
      { once: true }
    );

    computerBoard.appendChild(tile);
  }
}

export function renderGameboardShips(shipArray) {
  for (let ship of shipArray) {
    let willRenderShip = document.querySelector(
      `[data-player-index="${ship}"]`
    );
    willRenderShip.classList.add("ship");
  }
}
export function takeInputForAttack(div) {
  let coordinate = div.getAttribute("data-computer-index");
  playRound(coordinate);
}
export function renderMissAndHit(missArray, hitArray, isPlayerTurn) {
  if (isPlayerTurn) {
    for (let miss of missArray) {
      let willRenderMiss = document.querySelector(
        `[data-computer-index="${miss}"]`
      );
      willRenderMiss.classList.add("miss");
      willRenderMiss.classList.remove("empty");
    }
    for (let hit of hitArray) {
      let willRenderHit = document.querySelector(
        `[data-computer-index="${hit}"]`
      );
      willRenderHit.classList.add("hit");
      willRenderHit.classList.remove("empty");
    }
  } else {
    for (let miss of missArray) {
      let willRenderMiss = document.querySelector(
        `[data-player-index="${miss}"]`
      );
      willRenderMiss.classList.add("miss");
    }
    for (let hit of hitArray) {
      let willRenderHit = document.querySelector(
        `[data-player-index="${hit}"]`
      );
      willRenderHit.classList.add("hit");
    }
  }
}
