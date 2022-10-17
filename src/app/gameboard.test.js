import { gameBoard } from "./gameboard";

it("is ship4 placed", () => {
  let board = gameBoard();
  board.placeShips();
  expect(board.board[3].length).toEqual(4);
  expect(board.board[4].length).toEqual(4);
  expect(board.board[5].length).toEqual(4);
  expect(board.board[6].length).toEqual(4);
});
it("is receiveAttack function working", () => {
  let board = gameBoard();
  board.placeShips();
  board.receiveAttack(7);
  expect(board.missedCoordinates.some((c) => c === 7)).toEqual(true);
});
it("can ships hit", () => {
  let board = gameBoard();
  board.placeShips();
  board.receiveAttack(4);
  board.receiveAttack(5);
  board.receiveAttack(5);
  expect(board.board[4].hits).toEqual(2);
  expect(board.hitCoordinates.some((c) => c === 4)).toEqual(true);
  expect(board.hitCoordinates.some((c) => c === 5)).toEqual(true);
});
it("checkAllShipsSunk working", () => {
  let board = gameBoard();
  board.placeShips();
  board.receiveAttack(4);
  board.receiveAttack(5);
  board.receiveAttack(6);
  board.receiveAttack(3);
  board.receiveAttack(26);
  board.receiveAttack(27);
  board.receiveAttack(28);
  board.receiveAttack(60);
  board.receiveAttack(61);
  board.receiveAttack(62);
  board.receiveAttack(41);
  board.receiveAttack(42);
  board.receiveAttack(48);
  board.receiveAttack(49);
  board.receiveAttack(95);
  board.receiveAttack(96);
  board.receiveAttack(77);
  board.receiveAttack(55);
  board.receiveAttack(11);
  board.receiveAttack(33);
  expect(board.checkAllShipsSunk()).toEqual(true);
});
