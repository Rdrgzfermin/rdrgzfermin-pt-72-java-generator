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
  "My best friend",
  "The store Clurk",
  "The Mailperson"
];
let action = [
  "bite",
  "got a flat tire",
  "crashed",
  "done fucked up",
  "ate",
  "hurt",
  "robbed",
  "got the money wrong",
  "went on vacation",
  "pissed"
];
let what = [
  "plant",
  "tire",
  "robber",
  "on the floor",
  "in the bush",
  "my homework",
  "my bird",
  "the food",
  "stole the car",
  "my keys"
];
let when = [
  "yesterday.",
  "this morning.",
  "last night.",
  "the weekend.",
  "at the store.",
  "driving.",
  "before the class.",
  "While i was sleeping.",
  "during class.",
  "during lunch.",
  "while exercising."
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
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
