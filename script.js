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

    // console.log(totalValue.join(""));
    // console.log(currentValueScreen.textContent);

    if (operator == "+") {
        // console.log(add(a,b));
        currentValueScreen.textContent = "";
        operatorSignal.textContent = "";
        screen.textContent = add(a, b);
    } else if (operator == "-") {
        // console.log(subtract(a,b));
        currentValueScreen.textContent = "";
        operatorSignal.textContent = "";
        screen.textContent = subtract(a, b);
    } else if (operator == "/") {
        // console.log(divide(a,b));
        currentValueScreen.textContent = "";
        operatorSignal.textContent = "";
        screen.textContent = divide(a, b);
    } else {
        // console.log(multiply(a,b));
        currentValueScreen.textContent = "";
        operatorSignal.textContent = "";
        screen.textContent = multiply(a, b);
    }
}



const screen = document.querySelector('#resultado');
const clearBtn = document.querySelector('.clear');
let currentValue = 0;

// GETTIN ALL THE NUMBER BUTTONS
const numberBtn = document.querySelectorAll('.numberBtn');

numberBtn.forEach((item) => {
    item.addEventListener('click', addScreen);
});

// --------------------


//ADD TO SCREEN FUNCTION
let totalValue = [];

function addScreen(e) {
    currentValue = e.target.textContent;
    totalValue.push(currentValue);
    // console.log(totalValue.join(""));
    screen.textContent = totalValue.join("");
    // console.log(totalValue.join(""));

};

// --------------------


// OPERATOR NUMBERS FUNCTION

const operatorBtn = document.querySelectorAll('.operatorBtn');
const currentValueScreen = document.querySelector('#current-value');
const operatorSignal = document.querySelector('#signal')

let operatorChosen = "";

function getNumber(e) {
    // console.log(e.target.textContent)
    currentValueScreen.textContent = `${screen.textContent}`;
    operatorSignal.textContent = `${e.target.textContent}`;
    screen.textContent = "";
    // console.log(currentValue);
    // console.log(totalValue.join(""));
    operatorChosen = e.target.textContent;
    // console.log(operatorChosen);


    if (currentValueScreen.textContent) {
        totalValue = [];
    }
}

operatorBtn.forEach((item) => {
    item.addEventListener('click', getNumber);
})


// -----------

//OPERATING

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener('click', operate);


//-----




// CLEAR SCREEN FUNCTION
function clearScreen() {
    screen.textContent = "";
    currentValueScreen.textContent = "";
    operatorSignal.textContent = "";
    currentValue = 0;
    totalValue = [];
    operatorChosen = "";
};

clearBtn.addEventListener('click', clearScreen);
// -------------

