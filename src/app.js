import { game } from "./app/game";
import "./styles.scss";
let mainSong = document.querySelector("#main");
let soundButton = document.getElementById("sound");
const startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
  mainSong.volume = 0.5;
  mainSong.play();
  startButton.style.translate = "1400px";
  setTimeout(function x() {
    startButton.style.display = "none";
  }, 800);
  game();
});
soundButton.addEventListener("click", () => {
  if (mainSong.volume == 0.5) {
    mainSong.volume = 0.0;
  } else {
    mainSong.volume = 0.5;
  }
});
