/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  //write your code here
  const newSuit = generateSuit();
  const topSuitElem = document.querySelector(".topSuit");
  const bottomSuitElem = document.querySelector(".bottomSuit");
  document.querySelector(".number").innerHTML = generateCard();
  topSuitElem.className = `topSuit ${newSuit}`;
  bottomSuitElem.className = `bottomSuit ${newSuit}`;

  document.querySelector("#randomCard").addEventListener("click", () => {
    const newSuit = generateSuit();
    const topSuitElem = document.querySelector(".topSuit");
    const bottomSuitElem = document.querySelector(".bottomSuit");

    document.querySelector(".number").innerHTML = generateCard();
    topSuitElem.className = `topSuit ${newSuit}`;
    bottomSuitElem.className = `bottomSuit ${newSuit}`;
  });
};
let deck = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let suitCard = ["diam", "heart", "spade", "club"];
function generateCard() {
  const deckIndex = Math.floor(Math.random() * deck.length);
  return `${deck[deckIndex]}`;
}

function generateSuit() {
  const suitIndex = Math.floor(Math.random() * suitCard.length);
  return `${suitCard[suitIndex]}`;
}
window.resize = function() {
  console.log("resize");
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;
  document.getElementById("pokerCard").style.height = width + "px";
  document.getElementById("pokerCard").style.width = height + "px";
};

setInterval(onload, 10000);
