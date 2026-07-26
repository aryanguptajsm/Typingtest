const con = document.querySelector(".container");
const inf = con.querySelector(".info");

const startBtn = con.querySelector("#start");
const inputField = con.querySelector("#input");
const resultText = con.querySelector("#result");
const text = con.querySelector("#text");

const times = inf.querySelector("#time");
const character = inf.querySelector("#characters");
const restart = con.querySelector("#restart");
const accurace = inf.querySelector("#accuracy");
let run = null;

function runtime() {
    clearInterval(run);

    let time = 0;
    const targetText = text.textContent.trim();
   
    run = setInterval(() => {
        time++;


