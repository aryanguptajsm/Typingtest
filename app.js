   const startBtn = document.getElementById('start');
    const inputField = document.getElementById('input');
    const resultText = document.getElementById('result');
    const text = document.getElementById("text");
    let run;
     function runtime(){
       let time = 0;
     run = setInterval(()=>{
         time++;
         resultText.textContent = (time / 100).toFixed(2);
     },10) 
    };
    startBtn.addEventListener('click', () => {
      let value = inputField.value.trim();
       
       runtime();
        
       startBtn.textContent = "stop";
      
         
      
    });
   
    
   