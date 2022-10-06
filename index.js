const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const clear = document.querySelector('.clear');
const coma = document.querySelector('.coma');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isFirstValue === false) {
            getFirstValue(atr);
        }
        if (isSecondValue === false) {
            getSecondValue(atr);
        }
    })
})

function getFirstValue(el) {
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if (firstValue != "" && sign != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    signs.forEach((signItem) => {
        signItem.addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    })
}

getSign();

equals.addEventListener('click', () => {
    if (sign === '+') {
        resultValue = firstValue + secondValue;
    }
    else if (sign === '-') {
        resultValue = firstValue - secondValue;
    }
    else if (sign === 'x') {
        resultValue = firstValue * secondValue;
    }
    else if (sign === '/') {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    checkResultLength();
})

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);
    if (resultValue.length > 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    if (firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }

    result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
    if (firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }

    result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
    result.innerHTML = resultValue;
})

coma.addEventListener('click', () => {

})