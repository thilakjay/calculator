let numButtons = document.querySelectorAll(".numbers");
let operatorButtons = document.querySelectorAll("#operators");
let calcButton = document.querySelector("#calcBtn");
let clearButton = document.querySelector("#clrBtn");
let decimalButton = document.querySelector(".decimal");
let delButton = document.querySelector("#delBtn");
let decimalEnabled = true;

let display = document.querySelector("#display");
let operator = ""; 
let firstNumber = 0;
let secondNumber = 0;
let numberHolder = 0;

display.value = "";

for(let button of numButtons) {
    button.addEventListener("click", event => {
        if(firstNumber){
            numberHolder = firstNumber; 
            firstNumber = 0;
            clearDisplay();          
        }
            display.value += event.target.getAttribute("value");
    });
}

for(let button of operatorButtons) {
    button.addEventListener("click", event => {
        if(numberHolder){
            secondNumber = parseFloat(display.value);
            display.value = operate(numberHolder, secondNumber);
            numberHolder = 0;
            decimalEnabled = true;
        }
        firstNumber = parseFloat(display.value);
        operator = event.target.getAttribute("value");        
    });
}

calcButton.addEventListener("click", () => {
    if(numberHolder){
        secondNumber = parseFloat(display.value);
        display.value = operate(numberHolder, secondNumber);
        numberHolder = 0;
        decimalEnabled = true;
    }
});

clearButton.addEventListener("click", () => {
    clearDisplay();
    firstNumber, secondNumber, numberHolder = 0;
});

decimalButton.addEventListener("click", () => {
    if(decimalEnabled) {
        display.value += ".";
        decimalEnabled = false;
    }
});

delButton.addEventListener("click", () => {
    display.value = display.value.slice(0,display.value.length-1);
});

function clearDisplay() {
    display.value = "";
    decimalEnabled = true;
}

function operate(a, b) {
    if(b === 0){
        return "Can't divide by 0. Press CLEAR";
    }
    switch(operator) {
        case '+':
            return (a + b);
        case '-':
            return (a - b);
        case '*':
            return (a * b);
        case '/':
            return (a / b);
    }
}

