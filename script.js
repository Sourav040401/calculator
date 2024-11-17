const display=document.getElementById("display");
const button=document.getElementsByClassName("operator-button")
let lastinput="";

function appendTodisplay(value){
    const isOperator=(val)=>["+","-","*","/"].includes(val);
    if(isOperator(value) && isOperator(lastinput)){
        return;
    }
    display.value+=value;
    lastinput=value;
}
function calculate(){
try{
    display.value=eval(display.value);
    lastinput="";
}
catch{
 display.value="error"
 lastinput="";
}

}
function clearDisplay(){
    display.value="";
    lastinput="";
}

