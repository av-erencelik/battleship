import { playRound } from "./game";
let explosionSound = document.querySelector("#boom");
let splashSound = document.querySelector("#miss");
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
      if (!willRenderMiss.classList.contains("miss")) {
        willRenderMiss.classList.add("miss");
        willRenderMiss.style.opacity = "0.01";
        setTimeout(() => {
          willRenderMiss.style.opacity = "1";
        }, 500);
        splashSound.play();
      }
      willRenderMiss.classList.remove("empty");
    }
    for (let hit of hitArray) {
      let willRenderHit = document.querySelector(
        `[data-computer-index="${hit}"]`
      );
      if (!willRenderHit.classList.contains("hit")) {
        willRenderHit.classList.add("hit");
        willRenderHit.style.opacity = "0.01";
        setTimeout(() => {
          willRenderHit.style.opacity = "1";
        }, 500);
        explosionSound.play();
      }
      willRenderHit.classList.remove("empty");
    }
  } else {
    for (let miss of missArray) {
      let willRenderMiss = document.querySelector(
        `[data-player-index="${miss}"]`
      );
      if (!willRenderMiss.classList.contains("miss")) {
        willRenderMiss.classList.add("miss");
        willRenderMiss.style.opacity = "0.01";
        setTimeout(() => {
          willRenderMiss.style.opacity = "1";
        }, 500);
        splashSound.play();
      }
    }
    for (let hit of hitArray) {
      let willRenderHit = document.querySelector(
        `[data-player-index="${hit}"]`
      );
      if (!willRenderHit.classList.contains("hit")) {
        willRenderHit.style.opacity = "0.01";
        willRenderHit.classList.add("hit");
        setTimeout(() => {
          willRenderHit.style.opacity = "1";
        }, 500);
        explosionSound.play();
      }
    }
  }
}
export function renderWinner(winner) {
  const playerBoard = document.getElementById("playersBoard");
  const computerBoard = document.getElementById("computersBoard");
  const titlePlayer = document.getElementById("title1");
  const titleComputer = document.getElementById("title2");
  setTimeout(() => {
    playerBoard.style.translate = "2000px";
    computerBoard.style.translate = "2000px";
    titlePlayer.style.translate = "2000px";
    titleComputer.style.translate = "2000px";
  }, 250);

  setTimeout(() => {
    playerBoard.style.display = "none";
    computerBoard.style.display = "none";
    titlePlayer.style.display = "none";
    titleComputer.style.display = "none";
  }, 750);

  const winnerTitle = document.createElement("h2");
  winnerTitle.textContent = `Winner is ${winner.name}`;
  document.getElementById("boards").appendChild(winnerTitle);
  setTimeout(function () {
    winnerTitle.style.translate = "0px";
  }, 250);
}
