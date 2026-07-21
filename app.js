   const startBtn = document.getElementById('start');
    const inputField = document.getElementById('input');
    const resultText = document.getElementById('result');
    const text = document.getElementById("text");
    let run;
     function runtime(){
       let time = 0;
       const targettext = text.textContent.trim();
     run = setInterval(()=>{
         time++;
         resultText.textContent = (time / 100).toFixed(2);
     const correntvalue = inputField.value.trim();
     if(correntvalue === targettext){
        clearInterval(run);

     }
     },10) 
    };
    startBtn.addEventListener('click', () => {
      text.style.display ="i"
    });
   
    
   