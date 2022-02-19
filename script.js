let numButtons = document.querySelectorAll(".numbers");
let operatorButtons = document.querySelectorAll("#operators");
let calcButton = document.querySelector("#calcBtn");
let clearButton = document.querySelector("#clrBtn");
let decimalButton = document.querySelector(".decimal");
let decimalEnabled = true;

let display = document.querySelector("#display");
let operator = ""; 
let num1 = 0;
let num2 = 0;
let temp = 0;

display.value = "";

for(let button of numButtons) {
    button.addEventListener("click", event => {
        if(num1){
            display.value = "";
            temp = num1; 
            num1 = 0;
            decimalEnabled = true;
        }
            display.value += event.target.getAttribute("value");
    });
}

for(let button of operatorButtons) {
    button.addEventListener("click", event => {
        if(temp){
            num2 = parseFloat(display.value);
            display.value = operate(temp, num2);
            temp = 0;
            decimalEnabled = true;
        }
        num1 = parseFloat(display.value);
        operator = event.target.getAttribute("value");        
    });
}

calcButton.addEventListener("click", () => {
    if(temp){
        num2 = parseFloat(display.value);
        display.value = operate(temp, num2);
        temp = 0;
        decimalEnabled = true;
    }
});

clearButton.addEventListener("click", () => {
    display.value = "";
    decimalEnabled = true;
});

decimalButton.addEventListener("click", () => {
    if(decimalEnabled) {
        display.value += ".";
        decimalEnabled = false;
    }
});


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b) {
    switch(operator) {
        case '+':
            return add(a , b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

