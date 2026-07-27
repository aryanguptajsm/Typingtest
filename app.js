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
const wpms = inf.querySelector("#wpm")
let run = null;

function runtime() {
    clearInterval(run);

    let time = 0;
    const targetText = text.textContent.trim();
   
    run = setInterval(() => {
        time++;
       const seconds = (time / 100).toFixed(2);

        resultText.textContent = seconds;
        times.textContent = seconds;

        const currentValue = inputField.value.trim();

        character.textContent = currentValue.length;
        
        accuracy();
    
   if (
    currentValue.length === targetText.length 
   
   ) {
    clearInterval(run);

    startBtn.disabled = false;
    startBtn.textContent = "Done";
    }
    }, 10);
}

function accuracy() {
    const target = text.textContent.trim();
    const typed = inputField.value.trim();

    if (typed.length === 0) {
        accurace.textContent = "100%";
        return;
    }

    let correct = 0;

    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === target[i]) {
            correct++;
        }
    }

    const percentage = (correct / typed.length) * 100;

    accurace.textContent = percentage.toFixed(2) ;
    wpm();
}
function wpm(){
    const target = text.textContent.trim();
    const typed = inputField.value.trim();
     const character = inputField.value.trim();

    if(typed !== ""){
    let wm =   character.length / 60;
    wpms.textContent = wm;

    }

}
startBtn.addEventListener("click", () => {

    clearInterval(run);
    text.style.display ="initial";
    inputField.disabled = false;
    inputField.value = "";
    inputField.focus();

    character.textContent = "0";
    accurace.textContent = "100%";
    resultText.textContent = "0.00";
    times.textContent = "0.00";

    startBtn.disabled = true;
    startBtn.textContent = "Running...";

    runtime();
});

restart.addEventListener("click", () => {
    startBtn.click();
});

