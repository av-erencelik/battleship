import { Ship } from "./ships";

it("return true length", () => {
  const ship1 = Ship(3);
  expect(ship1.length).toEqual(3);
});
it("hit function working", () => {
  const ship1 = Ship(3);
  ship1.hit();
  ship1.hit();
  ship1.hit();
  expect(ship1.hits).toEqual(3);
});
it("isSunk function working", () => {
  const ship1 = Ship(3);
  ship1.hit();
  ship1.isSunk();
  expect(ship1.hits).toEqual(1);
  expect(ship1.sunk).toEqual(false);
});
it("can ship sunk", () => {
  const ship1 = Ship(3);
  ship1.hit();
  ship1.hit();
  ship1.hit();
  ship1.isSunk();
  expect(ship1.sunk).toEqual(true);
});
it("can ship hit more than length", () => {
  const ship1 = Ship(2);
  ship1.hit();
  ship1.hit();
  ship1.hit();
  ship1.hit();
  ship1.hit();
  expect(ship1.hits).toEqual(2);
});
