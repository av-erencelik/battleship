import { Ship } from "./ships";

export function gameBoard() {
  let board = {};
  board.missedCoordinates = [];
  board.hitCoordinates = [];
  board.board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    board.board[0][3] = ship4;
    board.board[0][4] = ship4;
    board.board[0][5] = ship4;
    board.board[0][6] = ship4;
    // ships with length 3s
    board.board[2][6] = ship3_1;
    board.board[2][7] = ship3_1;
    board.board[2][8] = ship3_1;
    board.board[6][0] = ship3_2;
    board.board[6][1] = ship3_2;
    board.board[6][2] = ship3_2;
    // ships with length 2s
    board.board[4][1] = ship2_1;
    board.board[4][2] = ship2_1;
    board.board[4][8] = ship2_2;
    board.board[4][9] = ship2_2;
    board.board[9][5] = ship2_3;
    board.board[9][6] = ship2_3;
    // ships with length 1s
    board.board[7][7] = ship1_1;
    board.board[3][3] = ship1_2;
    board.board[5][5] = ship1_3;
    board.board[1][1] = ship1_4;
  };
  board.receiveAttack = function (x, y) {
    if (
      board.missedCoordinates.some((c) => c.x === x && c.y === y) ||
      board.hitCoordinates.some((c) => c.x === x && c.y === y)
    ) {
      return;
    }
    if (board.board[x][y] === 0) {
      board.missedCoordinates.push({ x: x, y: y });
    } else {
      board.board[x][y].hit();
      board.board[x][y].isSunk();
      board.hitCoordinates.push({ x: x, y: y });
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
