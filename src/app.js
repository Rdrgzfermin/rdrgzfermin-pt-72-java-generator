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
  "The robber"
];

let action = ["bite", "got a flat tire", "crashed", "ate", "hurt", "pissed"];

let what = [
  "plant",
  "tire",
  "robber",
  "my homework",
  "my bird",
  "the food",
  "my keys"
];

let when = [
  "this morning.",
  "last night.",
  "driving.",
  "during class.",
  "during lunch.",
  "while exercising."
];

function getRandomNumber(_min, _max) {
  return Math.floor(Math.random() * 6);
  //return Math.floor(Math.random() * (max - min) + min);
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
  document.querySelector("#weirdness").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
