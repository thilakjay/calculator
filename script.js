const numButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");
const calcButton = document.querySelector(".calcBtn");
const clearButton = document.querySelector(".clrBtn");
const decimalButton = document.querySelector(".decimal");
const delButton = document.querySelector(".delBtn");
const display = document.querySelector(".display");

let decimalEnabled = true;
let operator = ""; 
let firstNumber = 0;
let secondNumber = 0;
let numberHolder = 0;

display.value = "";

for(let button of numButtons) {
    button.addEventListener("click", event => {
        // if(firstNumber){
        //     numberHolder = firstNumber; 
        //     firstNumber = 0;
        //     clearDisplay();          
        // }
        //     display.value += event.target.getAttribute("value");
        displayNumber(event.target.getAttribute("value"));
    });
}

for(let button of operatorButtons) {
    button.addEventListener("click", event => {
        // if(numberHolder){
        //     secondNumber = parseFloat(display.value);
        //     display.value = operate(numberHolder, secondNumber);
        //     numberHolder = 0;
        //     decimalEnabled = true;
        // }
        // firstNumber = parseFloat(display.value);
        // operator = event.target.getAttribute("value");  
        
        getOperator(event.target.getAttribute("value"));
    });
}

calcButton.addEventListener("click", () => {
    // if(numberHolder){
    //     secondNumber = parseFloat(display.value);
    //     display.value = operate(numberHolder, secondNumber);
    //     numberHolder = 0;
    //     decimalEnabled = true;
    // }
    calcCurrentOp();
});

clearButton.addEventListener("click", () => {
    clearDisplay();
    firstNumber, secondNumber, numberHolder = 0;
});

decimalButton.addEventListener("click", () => {
    insertDecimal();
});

delButton.addEventListener("click", () => {
    display.value = display.value.slice(0,display.value.length-1); //is there a simpler way to write this?
});

document.addEventListener("keydown", event => {
    switch(event.key){
        case "0": case "1": case "2": case "3": case "4": 
        case "5": case "6": case "7": case "8": case "9":
            displayNumber(event.key);
            break;
        case ".":
            insertDecimal();
            break;
        case "/": case "*": case "-": case "+":
            getOperator(event.key);
            break;
        case "=": case "Enter":
            calcCurrentOp();
            break;
        case "Backspace": case "Delete":
            display.value = display.value.slice(0,display.value.length-1);
            break;
    }
});

function displayNumber(number){
    //if there was a number that was previously entered, it gets stored before the new number is displayed
    if(firstNumber){
        numberHolder = firstNumber; 
        firstNumber = 0;
        clearDisplay();          
    }
        display.value += number;
}

function getOperator(op){
    //if there was a number that was previously stored after an operator is pressed, then that current operation is calculated and displayed.
    if(numberHolder){
        secondNumber = parseFloat(display.value);
        display.value = operate(numberHolder, secondNumber);
        numberHolder = 0;
        decimalEnabled = true;
    }
    firstNumber = parseFloat(display.value);
    operator = op;   
}

function calcCurrentOp() {
    //if there was a number that was previously stored after an operator is pressed, then that current operation is calculated and displayed.
    if(numberHolder){
        secondNumber = parseFloat(display.value);
        display.value = operate(numberHolder, secondNumber);
        numberHolder = 0;
        decimalEnabled = true;
    }
}

function insertDecimal() {
    if(decimalEnabled) {
        display.value += ".";
        decimalEnabled = false;
    }
}

function clearDisplay() {
    display.value = "";
    decimalEnabled = true;
}

function operate(a, b) {
    switch(operator) {
        case '+':
            return (a + b);
        case '-':
            return (a - b);
        case '*':
            return (a * b);
        case '/':
            if(b === 0){
                return "Can't divide by 0."
            }
            return (a / b);       
    }
}

//limit on number input/overflow
//styling
//toggle operator button 'on' to show which operator clicked
//clean up code - better variable names, comments
//readme - what you learned, struggled with, etc..

