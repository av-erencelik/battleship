export function player(name = "computer", isTurn = false) {
  let player = {};
  player.name = name;
  player.isTurn = isTurn;
  return player;
}
export function computerCoordinate() {
  return Math.floor(Math.random() * 100);
}
