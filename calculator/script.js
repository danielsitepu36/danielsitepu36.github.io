let prevNumber = '0';
let calculationOperator = '';
let currentNumber = '0';
let tempNumber = '0';

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
// console.log(numbers)
const calculatorScreen = document.querySelector('.calculator-screen');
const calculatorTempScreen = document.querySelector('.calculator-temp-screen');
const calculatorOpScreen = document.querySelector('.calculator-operator-screen');
const del = document.querySelector('.delete');
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');


// METHOD
const updateScreen = (number) => {
    calculatorScreen.value = number;
}
const updateTempScreen = (number) => {
    calculatorTempScreen.value = number;
}
const updateOpScreen = (operator) => {
    calculatorOpScreen.value = operator;
}
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number;
    }
}
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        tempNumber = currentNumber;
        updateTempScreen(tempNumber);
    }
    prevNumber = tempNumber;
    calculationOperator = operator;
    currentNumber = '';
}
const clearALL = () => {
    prevNumber = '0';
    calculationOperator = '';
    currentNumber = '0';
    tempNumber = '0';
}
const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}
const delChar = () => {
    if (currentNumber.length === 1) {
        currentNumber = '0';
    } else {
        currentNumber = currentNumber.slice(0, -1);
    }
}


// EVENT LISTENER
numbers.forEach((number) => {
    // console.log(number);
    number.addEventListener("click", (event) => {
        // console.log(event.target.value);
        inputNumber(event.target.value);
        updateScreen(currentNumber);
        calculate();
        // updateTempScreen(tempNumber);
    });
});
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        updateOpScreen(event.target.value);
        updateTempScreen(tempNumber);
        currentNumber = '0';
        updateScreen(currentNumber);
    });
});
equalSign.addEventListener('click', () => {
    updateScreen(tempNumber);
    updateOpScreen('=');
});

clearBtn.addEventListener('click', () => {
    clearALL();
    updateScreen(currentNumber);
    updateTempScreen(currentNumber);
    updateOpScreen('');
});
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});
del.addEventListener('click', () => {
    delChar();
    updateScreen(currentNumber);
    calculate();
    // updateTempScreen(tempNumber);
});


// CALCULATOR CORE
const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    tempNumber = result;
}