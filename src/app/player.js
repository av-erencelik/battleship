export function player(name = "computer", isTurn = false) {
  let player = {};
  player.name = name;
  player.isTurn = isTurn;
  return player;
}
