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
    playerBoard.appendChild(tile);
  }
  for (let i = 0; i < 100; i++) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    computerBoard.appendChild(tile);
  }
}
