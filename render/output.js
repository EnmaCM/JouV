let calScreen = document.getElementById("cal-screen");
const MAX_ELEMENTS = 20;
//max Elements on screen 20
//Use the logOutput object instead of console

function CALC_print(text,...rest) {

  let textToShow = text;

  if(text.length > MAX_ELEMENTS){
    let newStr = "";
    for(let i = text.length - MAX_ELEMENTS; i < text.length; i++){
      newStr += text[i];     
      logOutput.log("here: " + text[i]);
    }
    textToShow = newStr;
    logOutput.warn(newStr,"newStr: CALC_print() : at line 16: cut elements from screen");
  }

  logOutput.log(text.length,"<------Size of buffer at CALC_print");

    calScreen.innerText = textToShow;
    if(rest[1] === true) {
      let originalColor = calScreen.style.color;
      calScreen.style.color = "rgb(38, 172, 33)";
      setTimeout(()=> calScreen.style.color = originalColor,200);
      
    }
    if(rest[0] === true) {
      calScreen.insertAdjacentHTML("beforeend","<span id='Ired' style='color: red'>|</span>");
      setTimeout(() => document.getElementById("Ired").style.display = "none" ,200);
    }
}