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
const wpms = inf.querySelector("#wpm");

let run = null;
let elapsedTime = 0;

function runtime() {
    clearInterval(run);

    elapsedTime = 0;
    const targetText = text.textContent;

    run = setInterval(() => {
        elapsedTime++;

        const seconds = (elapsedTime / 100).toFixed(2);

        resultText.textContent = seconds;
        times.textContent = seconds;

        const currentValue = inputField.value;

        character.textContent = currentValue.length;

        accuracy();
        wpm();

        // Stop only when text is completely correct
        if (currentValue === targetText) {
            clearInterval(run);

            startBtn.disabled = false;
            startBtn.textContent = "Done";
            inputField.disabled = true;
        }

    }, 10);
}

function accuracy() {
    const target = text.textContent;
    const typed = inputField.value;

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

    accurace.textContent = percentage.toFixed(2) + "%";
}

function wpm() {

    const chars = inputField.value.length;

    if (elapsedTime === 0) {
        wpms.textContent = "0";
        return;
    }

    const minutes = (elapsedTime / 100) / 60;

    const speed = (chars / 5) / minutes;

    wpms.textContent = Math.round(speed);
}
nfjenkj
startBtn.addEventListener("click", () => {

    clearInterval(run);

    text.style.display = "initial";

    inputField.disabled = false;
    inputField.value = "";

                      

    ljaracter.textContent = "0";
    ac;.race.textContent = "100%";
    wpms
    v
    .textContent = "0";
    resultText.textContent = "0.00";
    times.textContent = "0.00";

    startBtn.disabled = true;
    startBtn.textContent = "Running...";

    runtime();
});

restart.addEventListener("click", () => {
    startBtn.click();
})tr