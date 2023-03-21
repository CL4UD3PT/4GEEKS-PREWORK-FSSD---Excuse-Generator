/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//variables
const excuseHTMLElement = document.querySelector("#excuse");
const btn = document.querySelector("#btnNewExcuse");
let generatedExcuse = "";

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

const prepositions = ["in", "on", "at"];
const where = [
  "the carpet",
  "the toilet",
  "the dishwasher",
  "the apartment",
  "the roof"
];

// code
const dataset = [possessivs, who, action, what, when, prepositions, where];

function getElement(arr) {
  return arr[randomNumber(arr)];
}

function wordCapitalizer(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function randomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

// implemented map() method. Thanks to Javier Seiglie
function excuseConstructor(data) {
  return (generatedExcuse = data.map((el, i) =>
    i === 0 ? `${wordCapitalizer(getElement(el))}` : `${getElement(el)}`
  )).join(" ");
}

generatedExcuse = excuseConstructor(dataset);

window.onload = () => {
  excuseHTMLElement.innerHTML = generatedExcuse;
};

btn.addEventListener("click", () => {
  excuseHTMLElement.innerHTML = excuseConstructor(dataset);
});
