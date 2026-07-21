   const startBtn = document.getElementById('start');
    const inputField = document.getElementById('input');
    const resultText = document.getElementById('result');
    const text = document.getElementById("text");
    
    startBtn.addEventListener('click', () => {
      const value = inputField.value.trim();
      let time = 0;
     let run = setInterval(()=>{
         time++;
         resultText.textContent = (time / 100).toFixed(2);
     },10) 
      if (value === text) {
          clearInterval(run);
      } else {
        resultText.textContent = 'Please enter a value first.';
      }
    });
    console.log