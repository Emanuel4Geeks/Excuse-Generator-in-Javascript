/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.body.innerHTML = "<p>" + excuseGenerator() + "</p>";
};

function excuseGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  return `${who[numArray(who)]} ${action[numArray(action)]} ${
    what[numArray(what)]
  } ${when[numArray(when)]}`;
}

const numArray = arr => Math.floor(Math.random() * arr.length);
