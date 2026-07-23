  const con = document.querySelector(".container")
 const info = container.querySelector(".info")
const startBtn = info.querySelector("#start");
    const inputField = document.getElementById('input');
    const resultText = document.getElementById('result');
    const text = document.querySelector("#text");
    let run;

     function runtime(){
       let time = 0;
       //
       const targettext = text.textContent.trim();
       //
     run = setInterval(()=>{
         time++;
         resultText.textContent = (time / 100).toFixed(2);
        //
     const currentvalue = inputField.value.trim();
     //
     if(currentvalue === targettext){
        clearInterval(run);
        startBtn.disabled =false;
      
     //
     }
     },10) 
    };
    startBtn.addEventListener('click', () => {
      text.style.display ="initial";
      startBtn.disabled =true;
       runtime();
       if(inputField.value.trim() !== ""){
        inputField.value = ""
          startBtn.textContent ="start";
       }
    });
   
    
   