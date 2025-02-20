const operation = document.querySelector("#operation");
const currentNumber = document.querySelector("#currentNumber");
const operatorContainer = document.querySelector("#operatorContainer");

let operationContent;
let operationNumber;
let number = "0";
let operator;
let resetNumber;
let result;
const operands = [0,1,2,3,4,5,6,7,8,9];

currentNumber.textContent = number;


function addOperands(first, second){
    return first + second;
};
function subtractOperands(first, second){
    return first - second;
};
function multiplyOperands(first, second){
    return first * second;
};
function divideOperands(first, second){
    return first / second;
};
function calculatePercentage(first, second){
    return first / second * 100;
}

operatorContainer.addEventListener("click", (event) => {
    let target = event.target;
    if (operands.includes(+target.id)){
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
            break;
        case "+":
            operationNumber = number;
            operator = "+";
            resetNumber = true;
            operation.textContent = operationNumber.toString().concat("+");
            break;
        case "-":
            operationNumber = number;
            operator = "-";
            resetNumber = true;
            operation.textContent = operationNumber.toString().concat("-");
            break;
        case "x":
            operationNumber = number;
            operator = "x";
            resetNumber = true;
            operation.textContent = operationNumber.toString().concat("x");
            break;
        case "/":
            operationNumber = number;
            operator = "/";
            resetNumber = true;
            operation.textContent = operationNumber.toString().concat("/");
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
                    operation.textContent = operationNumber.toString().concat("/", number, "=");
                    operationNumber = number;
                    number = result;
                    resetNumber = true;
                    break;
            }       
    }
    currentNumber.textContent = number;
});

