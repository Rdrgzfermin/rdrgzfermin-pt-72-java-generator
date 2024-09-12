/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "My dog",
  "My car",
  "My sister",
  "The neighbor",
  "The Cat",
  "The robber",
  "My coworker",
  "My Boss"
];

let action = [
  "bite",
  "got a flat tire",
  "crashed",
  "ate",
  "hurt",
  "pissed on",
  "passed out",
  "drunk"
];

let what = [
  "plant",
  "tire",
  "robbed",
  "my homework",
  "my bird",
  "the food",
  "my keys",
  "the car",
  "the tree"
];

let when = [
  "this morning.",
  "last night.",
  "driving.",
  "during class.",
  "during lunch.",
  "while exercising.",
  "during Doctor visit.",
  "while playing games."
];

function getRandomNumber(_min, _max) {
  return Math.floor(Math.random() * 8);
}

function getRandom(anyArray) {
  let max = anyArray.lenght - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let btn = document.querySelector(".btn");
window.onload = function() {
  btn.addEventListener("click", function() {
    document.querySelector("#weirdness").innerHTML =
      getRandom(who) +
      " " +
      getRandom(action) +
      " " +
      getRandom(what) +
      " " +
      getRandom(when);
  });
};
