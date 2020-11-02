let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = " ";
function power(y){
    var x = screenValue;
    x = Math.pow(x,y);
    screenValue = x;
}

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log("button text " +buttonText);
        if(buttonText == "C"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue);
        }
        else if(buttonText == "B"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "X^2"){
            // screenValue = x;
            screen.value = screenValue;
        }
        else if(buttonText == "X^3"){
            // screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "r"){
            screenValue += "3.14";
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}