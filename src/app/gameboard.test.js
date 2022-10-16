import { gameBoard } from "./gameboard";

it("is ship4 placed", () => {
  let board = gameBoard();
  board.placeShips();
  expect(board.board[0][3].length).toEqual(4);
  expect(board.board[0][4].length).toEqual(4);
  expect(board.board[0][5].length).toEqual(4);
  expect(board.board[0][6].length).toEqual(4);
});
it("is receiveAttack function working", () => {
  let board = gameBoard();
  board.placeShips();
  board.receiveAttack(0, 7);
  expect(board.missedCoordinates.some((c) => c.x === 0 && c.y === 7)).toEqual(
    true
  );
});
it("can ships hit", () => {
  let board = gameBoard();
  board.placeShips();
  board.receiveAttack(0, 4);
  board.receiveAttack(0, 5);
  board.receiveAttack(0, 5);
  expect(board.board[0][4].hits).toEqual(2);
  expect(board.hitCoordinates.some((c) => c.x === 0 && c.y === 4)).toEqual(
    true
  );
  expect(board.hitCoordinates.some((c) => c.x === 0 && c.y === 5)).toEqual(
    true
  );
});
it("checkAllShipsSunk working", () => {
  let board = gameBoard();
  board.placeShips();
  board.receiveAttack(0, 4);
  board.receiveAttack(0, 5);
  board.receiveAttack(0, 6);
  board.receiveAttack(0, 3);
  board.receiveAttack(2, 6);
  board.receiveAttack(2, 7);
  board.receiveAttack(2, 8);
  board.receiveAttack(6, 0);
  board.receiveAttack(6, 1);
  board.receiveAttack(6, 2);
  board.receiveAttack(4, 1);
  board.receiveAttack(4, 2);
  board.receiveAttack(4, 8);
  board.receiveAttack(4, 9);
  board.receiveAttack(9, 5);
  board.receiveAttack(9, 6);
  board.receiveAttack(7, 7);
  board.receiveAttack(5, 5);
  board.receiveAttack(1, 1);
  board.receiveAttack(3, 3);
  expect(board.checkAllShipsSunk()).toEqual(true);
});
