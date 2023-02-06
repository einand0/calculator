const numberBtn = document.querySelectorAll('.numberBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');
const operatorSignal = document.querySelector('#signal');
const screen = document.querySelector('#resultado');
const currentValueScreen = document.querySelector('#current-value');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector(".equals");
let currentValue = 0;
let totalValue = [];
let operatorChosen = "";


// ------------------

equalsBtn.addEventListener('click', operate);

operatorBtn.forEach((item) => {
    item.addEventListener('click', getNumber);
})

clearBtn.addEventListener('click', clearScreen);


numberBtn.forEach((item) => {
    item.addEventListener('click', addScreen);
});



// --------------------


function addScreen(e) {
    currentValue = e.target.textContent;
    totalValue.push(currentValue);
    screen.textContent = totalValue.join("");

};


function getNumber(e) {
    currentValueScreen.textContent = `${screen.textContent}`;
    operatorSignal.textContent = `${e.target.textContent}`;
    screen.textContent = "";
    operatorChosen = e.target.textContent;
 
    if (currentValueScreen.textContent) {
        totalValue = [];
    }
}


function clearScreen() {
    screen.textContent = "";
    currentValueScreen.textContent = "";
    operatorSignal.textContent = "";
    currentValue = 0;
    totalValue = [];
    operatorChosen = "";
};


// --------------------------



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

function operate(operator, a, b) {

    operator = operatorChosen;

    a = Number(currentValueScreen.textContent);
    b = Number(totalValue.join(""));


    if (operator == "+") {
        currentValueScreen.textContent = "";
        operatorSignal.textContent = "";
        screen.textContent = add(a, b);
    } else if (operator == "-") {
        currentValueScreen.textContent = "";
        operatorSignal.textContent = "";
        screen.textContent = subtract(a, b);
    } else if (operator == "/") {
        currentValueScreen.textContent = "";
        operatorSignal.textContent = "";
        screen.textContent = divide(a, b);
    } else {
        currentValueScreen.textContent = "";
        operatorSignal.textContent = "";
        screen.textContent = multiply(a, b);
    }
}
