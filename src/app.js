/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//variables
const excuseHTMLElement = document.querySelector("#excuse");
const btn = document.querySelector("#btnNewExcuse");

//data
const possessivs = ["his", "her", "their", "our", "my", "your"];
const who = ["dog", "grandma", "turtle", "bird"];
const action = ["ate", "peed", "crushed", "broke", "forgot", "lost"];
const what = [
  "the homework",
  "the keys",
  "the car",
  "the laptop",
  "the screen",
  "the perfume",
  "the book",
  "the phones"
];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

// JUST FOR TESTING PURPOSES
// cause "excuseConstructor" uses the spread syntax,
// we can work with as many arrays as we want
// if testing with this arrays,
// don't forget to add them to excuseConstructor call
//
// const prepositions = ["in", "on", "at"];
// const where = [
//   "the carpet",
//   "the toilet",
//   "the dishwasher",
//   "the apartment",
//   "the roof"
// ];

// code
function getElement(arr) {
  return arr[randomNumber(arr)];
}

function wordCapitalizer(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function randomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

function excuseConstructor(...Arrs) {
  let excuseCombi = [];
  let firstWordToCapitals = true;

  for (let arr of Arrs) {
    firstWordToCapitals
      ? (excuseCombi.push(wordCapitalizer(getElement(arr))),
        (firstWordToCapitals = false))
      : excuseCombi.push(getElement(arr));
  }

  return excuseCombi.join(" ");
}

const newExcuse = () => excuseConstructor(possessivs, who, action, what, when);

window.onload = () => {
  excuseHTMLElement.innerHTML = newExcuse();
};

btn.addEventListener("click", function() {
  excuseHTMLElement.innerHTML = newExcuse();
});
