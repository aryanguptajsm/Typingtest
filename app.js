const con = document.querySelector(".container");
const inf = con.querySelector(".info");

const startBtn = con.querySelector("#start");
const inputField = con.querySelector("#input");
const resultText = con.querySelector("#result");
const text = con.querySelector("#text");
const time = inf.querySelector("")

let run;

function runtime() {
    clearInterval(run);

    let time = 0;
    const targetText = text.textContent.trim();

    run = setInterval(() => {
        time++;
        resultText.textContent = (time / 100).toFixed(2);
        time.textContent = resultText.textContent;
        const currentValue = inputField.value.trim();

        if (currentValue === targetText) {
            clearInterval(run);
            startBtn.disabled = false;
            startBtn.textContent = "Start";
        }
    }, 10);
}

startBtn.addEventListener("click", () => {
    clearInterval(run);
    text.style.display = "block";
    inputField.value = "";
    inputField.focus();

    resultText.textContent = "0.00";

    startBtn.disabled = true;
    startBtn.textContent = "Running...";

    runtime();
});