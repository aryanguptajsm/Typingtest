const con = document.querySelector(".container");
const inf = con.querySelector(".info");

const startBtn = con.querySelector("#start");
const inputField = con.querySelector("#input");
const resultText = con.querySelector("#result");
const text = con.querySelector("#text");
const times = inf.querySelector("#time");
const cha = inf.querySelector("#characters");
const restart = con.querySelector("#restart")
let acc = inf.querySelector("#accuracy");

let run;

function runtime() {
    clearInterval(run);

    let time = 0;
    const targetText = text.textContent.trim();

    run = setInterval(() => {
        time++;
       resultText.textContent = (time / 100).toFixed(2);
        times.textContent = resultText.textContent;
        const currentValue = inputField.value.trim();
     for(let i = 0; i <= targetText.length ; i++){
        if (currentValue === targetText) {
            clearInterval(run);
            startBtn.disabled = false;
            startBtn.textContent = "Start";
        }};
    }, 10);
}
function accracy(){
    const targettype = text.textContent;
    const typed = inputField.value.trim();
    let correct = 0;
    for (let i = 0; i < typed.length; i++) {
  if(targettype[i] === typed[i]){
    correct++;
  }
};
     if (typed.length === 0) {
    acc.textContent = "100%";
    return;
}

     
};
inputField.addEventListener("input", () => {
   accracy();
});
startBtn.addEventListener("click", () => {
    clearInterval(run);
    text.style.display = "block";
    inputField.value = "";
    inputField.focus();

    resultText.textContent = "0.00";

    startBtn.disabled = true;
    startBtn.textContent = "Running...";

    runtime();
    accracy();
});