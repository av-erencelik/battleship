import { displayGameBoards } from "./dom";
import { gameBoard } from "./gameboard";
import { player } from "./player";

export function game() {
  let playerOne = player("player", true);
  let computer = player();
  let playerOneGameBoard = gameBoard();
  let computerGameBoard = gameBoard();
  playerOneGameBoard.placeShips();
  computerGameBoard.placeShips();
  displayGameBoards();
}
