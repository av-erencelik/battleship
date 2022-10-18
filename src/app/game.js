import {
  displayGameBoards,
  renderGameboardShips,
  renderMissAndHit,
} from "./dom";
import { gameBoard } from "./gameboard";
import { computerCoordinate, player } from "./player";
let playerOne;
let computer;
let playerOneGameBoard;
let computerGameBoard;
export function game() {
  playerOne = player("player", true);
  computer = player();
  playerOneGameBoard = gameBoard();
  computerGameBoard = gameBoard();
  playerOneGameBoard.placeShips();
  computerGameBoard.placeShips();
  displayGameBoards();
  renderGameboardShips(playerOneGameBoard.shipCoordinates);
}

export function playRound(coordinate) {
  if (playerOne.isTurn) {
    let isHit = computerGameBoard.receiveAttack(coordinate);
    if (isHit) {
      renderMissAndHit(
        computerGameBoard.missedCoordinates,
        computerGameBoard.hitCoordinates,
        true
      );
      return;
    }
    renderMissAndHit(
      computerGameBoard.missedCoordinates,
      computerGameBoard.hitCoordinates,
      true
    );
    computer.isTurn = true;
    playerOne.isTurn = false;
  }
  if (computer.isTurn) {
    let isComHit = computerPlay();
    renderMissAndHit(
      playerOneGameBoard.missedCoordinates,
      playerOneGameBoard.hitCoordinates,
      false
    );
    while (isComHit) {
      isComHit = computerPlay();
      renderMissAndHit(
        playerOneGameBoard.missedCoordinates,
        playerOneGameBoard.hitCoordinates,
        false
      );
    }
    playerOne.isTurn = true;
    computer.isTurn = false;
  }
}
function computerPlay() {
  let comCoordinate = computerCoordinate();
  while (
    playerOneGameBoard.missedCoordinates.some((c) => c === comCoordinate) ||
    playerOneGameBoard.hitCoordinates.some((c) => c === comCoordinate)
  ) {
    comCoordinate = computerCoordinate();
  }
  return playerOneGameBoard.receiveAttack(comCoordinate);
}
