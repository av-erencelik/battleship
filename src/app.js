import { game } from "./app/game";
import "./styles.scss";

const startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
  startButton.style.translate = "1400px";
  setTimeout(function x() {
    startButton.style.display = "none";
  }, 800);
  game();
});
