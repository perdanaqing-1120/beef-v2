const display = document.getElementById('display');

function appendToDisplay(click){
    display.value += click;
};

function clearDisplay(){
    display.value = "";
};

function calculateResult() {
    try{
        display.value = eval(display.value);
    } catch(eror){
        display.value = "eror"
    }
}