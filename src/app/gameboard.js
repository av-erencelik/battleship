import { Ship } from "./ships";

export function gameBoard() {
  let board = {};
  board.missedCoordinates = [];
  board.hitCoordinates = [];
  board.shipCoordinates = [];
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
  board.placeShips4 = function () {
    let i = Math.floor(Math.random() * 100);
    const lastDigit2Str = String(i).slice(-1);
    const lastDigit2Num = Number(lastDigit2Str);
    if (lastDigit2Num >= 7) {
      board.board[i] = ship4;
      board.board[i - 1] = ship4;
      board.board[i - 2] = ship4;
      board.board[i - 3] = ship4;
      board.shipCoordinates.push(i);
      board.shipCoordinates.push(i - 1);
      board.shipCoordinates.push(i - 2);
      board.shipCoordinates.push(i - 3);
    } else {
      board.board[i] = ship4;
      board.board[i + 1] = ship4;
      board.board[i + 2] = ship4;
      board.board[i + 3] = ship4;
      board.shipCoordinates.push(i);
      board.shipCoordinates.push(i + 1);
      board.shipCoordinates.push(i + 2);
      board.shipCoordinates.push(i + 3);
    }
  };
  board.placeShips3 = function (ship) {
    let i = Math.floor(Math.random() * 100);
    const lastDigit2Str = String(i).slice(-1);
    const lastDigit2Num = Number(lastDigit2Str);
    if (lastDigit2Num >= 8) {
      if (board.board[i] || board.board[i - 1] || board.board[i - 2]) {
        this.placeShips3(ship);
        return;
      } else {
        board.board[i] = ship;
        board.board[i - 1] = ship;
        board.board[i - 2] = ship;
        board.shipCoordinates.push(i);
        board.shipCoordinates.push(i - 1);
        board.shipCoordinates.push(i - 2);
      }
    } else {
      if (board.board[i] || board.board[i + 1] || board.board[i + 2]) {
        this.placeShips3(ship);
        return;
      } else {
        board.board[i] = ship;
        board.board[i + 1] = ship;
        board.board[i + 2] = ship;
        board.shipCoordinates.push(i);
        board.shipCoordinates.push(i + 1);
        board.shipCoordinates.push(i + 2);
      }
    }
  };
  board.placeShips2 = function (ship) {
    let i = Math.floor(Math.random() * 100);
    const lastDigit2Str = String(i).slice(-1);
    const lastDigit2Num = Number(lastDigit2Str);
    if (lastDigit2Num == 9) {
      if (board.board[i] || board.board[i - 1]) {
        this.placeShips2(ship);
        return;
      } else {
        board.board[i] = ship;
        board.board[i - 1] = ship;
        board.shipCoordinates.push(i);
        board.shipCoordinates.push(i - 1);
      }
    } else {
      if (board.board[i] || board.board[i + 1]) {
        this.placeShips2();
        return;
      } else {
        board.board[i] = ship;
        board.board[i + 1] = ship;
        board.shipCoordinates.push(i);
        board.shipCoordinates.push(i + 1);
      }
    }
  };
  board.placeShips1 = function (ship) {
    let i = Math.floor(Math.random() * 100);
    const lastDigit2Str = String(i).slice(-1);
    const lastDigit2Num = Number(lastDigit2Str);
    if (board.board[i]) {
      this.placeShips1(ship);
    } else {
      board.board[i] = ship;
      board.shipCoordinates.push(i);
    }
  };
  board.placeShips = function () {
    this.placeShips4();
    this.placeShips3(ship3_1);
    this.placeShips3(ship3_2);
    this.placeShips2(ship2_1);
    this.placeShips2(ship2_2);
    this.placeShips2(ship2_3);
    this.placeShips1(ship1_1);
    this.placeShips1(ship1_2);
    this.placeShips1(ship1_3);
    this.placeShips1(ship1_4);
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
      return false;
    } else {
      board.board[coordinate].hit();
      board.board[coordinate].isSunk();
      board.hitCoordinates.push(coordinate);
      return true;
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
