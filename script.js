const operation = document.querySelector("#operation");
const currentNumber = document.querySelector("#currentNumber");
const operatorContainer = document.querySelector("#operatorContainer");
const buttons = document.querySelectorAll("button");

let operationContent;
let number = "0";
const operands = ['0','1','2','3','4','5','6','7','8','9'];

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
function plusMinus(number){
    return number * (-1);
}

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        if (operands.includes(button.id)){
            if (number.at(0) === "0" && number.at(1) !== "."){
                number = "";
            }
            number += button.id;
        }
        if (button.id == "dot" && !number.includes(".")){
            number += ".";
        }
        currentNumber.textContent = number;
    });
});