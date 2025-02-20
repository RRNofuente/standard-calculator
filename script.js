const operation = document.querySelector("#operation");
const currentNumber = document.querySelector("#currentNumber");
const operatorContainer = document.querySelector("#operatorContainer");
const plusOperator = document.querySelector("#plus");
const minusOperator = document.querySelector("#minus");
const multiplyOperator = document.querySelector("#multiply");
const divideOperator = document.querySelector("#divide");
const dot = document.querySelector("#dot");
const sign = document.querySelector("#sign");
const percentage = document.querySelector("#percentage");


let operationContent;
let operationNumber;
let number = "0";
let operator;
let resetNumber;
let result;
const operands = [0,1,2,3,4,5,6,7,8,9];

currentNumber.textContent = number;

function calculatePercentage(first, second){
    return first / second * 100;
}
function disableOperators(){
    plusOperator.setAttribute("disabled", true);
    minusOperator.setAttribute("disabled", true);
    multiplyOperator.setAttribute("disabled", true);
    divideOperator.setAttribute("disabled", true);
    dot.setAttribute("disabled", true);
    sign.setAttribute("disabled", true);
    percentage.setAttribute("disabled", true);
}
function enableOperators(){
    plusOperator.removeAttribute("disabled");
    minusOperator.removeAttribute("disabled");
    multiplyOperator.removeAttribute("disabled");
    divideOperator.removeAttribute("disabled");
    dot.removeAttribute("disabled");
    sign.removeAttribute("disabled");
    percentage.removeAttribute("disabled");
}

operatorContainer.addEventListener("click", (event) => {
    let target = event.target;
    if (operands.includes(+target.id)){
        if (number === "Cannon divide by zero"){
            number = "0";
            resetNumber = false;
            operation.textContent = "";
            operator = "";
            operationNumber = "";
            enableOperators();
        }
        if (number[0] === "0" && number[1] !== "."){
            number = "";
        }
        if (resetNumber){
            number = "";
            resetNumber = false;
        }
        number += target.id;
        if (number === ""){
            number = "0";
        }
    }

    if (target.id == "dot" && !number.toString().includes(".")){
        number += ".";
    }

    switch (target.id) {
        case "sign":
            if (number !== "0"){
                number = number * -1;
            }
            break;
        case "backspace":
            if (number === "Cannon divide by zero"){
                number = "0";
                resetNumber = false;
                operation.textContent = "";
                operator = "";
                operationNumber = "";
                enableOperators();
            }
            if (number !== "0"){
                if (number < 10 && number > -10) {
                    number = "0";
                } else {
                    number = number.toString().slice(0, -1);
                }
            }
            
            break;
        case "clear":
            number = "0";
            resetNumber = false;
            operation.textContent = "";
            operator = "";
            operationNumber = "";
            enableOperators();
            break;
        case "plus":
            operationNumber = number;
            operator = "+";
            resetNumber = true;
            operation.textContent = operationNumber.toString().concat("+");
            break;
        case "minus":
            operationNumber = number;
            operator = "-";
            resetNumber = true;
            operation.textContent = operationNumber.toString().concat("-");
            break;
        case "multiply":
            operationNumber = number;
            operator = "x";
            resetNumber = true;
            operation.textContent = operationNumber.toString().concat("x");
            break;
        case "divide":
            operationNumber = number;
            operator = "/";
            resetNumber = true;
            operation.textContent = operationNumber.toString().concat("/");
            break;
        case "percentage":
            if (!operationNumber){
                number = "0";
            } else {
                result = +operationNumber / +number * 100;
                operation.textContent = operationNumber.toString().concat(operator, result, "=");
                operationNumber = number;
                number = result;
                resetNumber = true;
            }
            break;
        case "equal":
            switch (operator){
                case "+":
                    result = +operationNumber + +number;
                    operation.textContent = operationNumber.toString().concat("+", number, "=");
                    operationNumber = number;
                    number = result;
                    resetNumber = true;
                    break;
                case "-":
                    result = +operationNumber - +number;
                    operation.textContent = operationNumber.toString().concat("-", number, "=");
                    operationNumber = number;
                    number = result;
                    resetNumber = true;
                    break;
                case "x":
                    result = +operationNumber * +number;
                    operation.textContent = operationNumber.toString().concat("x", number, "=");
                    operationNumber = number;
                    number = result;
                    resetNumber = true;
                    break;
                case "/":
                    result = +operationNumber / +number;
                    if (result === Infinity || result === -Infinity){
                        operation.textContent = operationNumber.toString().concat("/");
                        number = "Cannon divide by zero";
                        resetNumber = false;
                        disableOperators();
                    } else if (number === "Cannon divide by zero"){
                        number = "0";
                        resetNumber = false;
                        operation.textContent = "";
                        operator = "";
                        operationNumber = "";
                        enableOperators();
                    } else {
                        operation.textContent = operationNumber.toString().concat("/", number, "=");
                        operationNumber = number;
                        number = result;
                        resetNumber = true;
                    }
                    
                    break;
            }
            
    }
    currentNumber.textContent = number;
});

