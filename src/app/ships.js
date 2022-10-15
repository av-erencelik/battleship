export function Ship(length) {
  let ship = {};
  ship.length = length;
  ship.hits = 0;
  ship.sunk = false;
  ship.hit = function () {
    if (ship.hits < ship.length) {
      ship.hits++;
    }
  };
  ship.isSunk = function () {
    if (ship.hits === ship.length) {
      ship.sunk = true;
    }
  };
  return ship;
}
