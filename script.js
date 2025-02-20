const operation = document.querySelector("#operation");
const currentNumber = document.querySelector("#currentNumber");
const operatorContainer = document.querySelector("#operatorContainer");

let operationContent;
let number = "0";
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
        number += target.id;
    }

    if (target.id == "dot" && !number.includes(".")){
        number += ".";
    }

    switch (target.id) {
        case "sign":
            if (number !== "0"){
                number = number * -1;
            }
            break;
    }
    currentNumber.textContent = number;
});

