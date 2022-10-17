import { Ship } from "./ships";

export function gameBoard() {
  let board = {};
  board.missedCoordinates = [];
  board.hitCoordinates = [];
  board.board = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  let ship4 = Ship(4);
  let ship3_1 = Ship(3);
  let ship3_2 = Ship(3);
  let ship2_1 = Ship(2);
  let ship2_2 = Ship(2);
  let ship2_3 = Ship(2);
  let ship1_1 = Ship(1);
  let ship1_2 = Ship(1);
  let ship1_3 = Ship(1);
  let ship1_4 = Ship(1);
  board.placeShips = function () {
    // ship with length 4
    board.board[3] = ship4;
    board.board[4] = ship4;
    board.board[5] = ship4;
    board.board[6] = ship4;
    // ships with length 3s
    board.board[26] = ship3_1;
    board.board[27] = ship3_1;
    board.board[28] = ship3_1;
    board.board[60] = ship3_2;
    board.board[61] = ship3_2;
    board.board[62] = ship3_2;
    // ships with length 2s
    board.board[41] = ship2_1;
    board.board[42] = ship2_1;
    board.board[48] = ship2_2;
    board.board[49] = ship2_2;
    board.board[95] = ship2_3;
    board.board[96] = ship2_3;
    // ships with length 1s
    board.board[77] = ship1_1;
    board.board[33] = ship1_2;
    board.board[55] = ship1_3;
    board.board[11] = ship1_4;
  };
  board.receiveAttack = function (coordinate) {
    if (
      board.missedCoordinates.some((c) => c === coordinate) ||
      board.hitCoordinates.some((c) => c === coordinate)
    ) {
      return;
    }
    if (board.board[coordinate] === 0) {
      board.missedCoordinates.push(coordinate);
    } else {
      board.board[coordinate].hit();
      board.board[coordinate].isSunk();
      board.hitCoordinates.push(coordinate);
    }
  };
  board.checkAllShipsSunk = function () {
    if (
      ship1_1.sunk === true &&
      ship1_2.sunk === true &&
      ship1_3.sunk === true &&
      ship1_4.sunk === true &&
      ship2_1.sunk === true &&
      ship2_2.sunk === true &&
      ship2_3.sunk === true &&
      ship3_1.sunk === true &&
      ship3_2.sunk === true &&
      ship4.sunk === true
    ) {
      return true;
    } else {
      return false;
    }
  };
  return board;
}
