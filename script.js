const nums = document.querySelectorAll('.number');
const ops = document.querySelectorAll('.ops');
const screen = document.querySelector('#screen');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');

let total = 0;
let displayArr = [];
let operator;
let init = false;

let display = (num) => {
    displayArr.push(num);
    screen.textContent = displayArr.join('');
};

function math(n1, op, n2) {
    switch(op) {
        case "+": return n1 + n2;
            break;
        case "-": return n1 - n2;
            break;
        case "*": return n1 * n2;
            break;
        case "/": return n1 / n2;
    };
};

function clearAll() {
    init = false;
    total = 0;
    displayArr = [];
};

function operate(n1) {
    total = math(total, operator, n1);
};

nums.forEach((num) => {
    num.addEventListener('click', () => {
        display(num.value);
    });
});

clear.addEventListener('click', () => {
    clearAll()
    screen.textContent = total;
});

ops.forEach((op) => {
    op.addEventListener('click', () => {
        if(init === false) {
            total = +displayArr.join('');
            init = true;
        } else {
            operate(+displayArr.join(''));
            screen.textContent = total;
        };
        displayArr = [];
        operator = op.value;
    });
});

equals.addEventListener('click', () => {
    operate(+displayArr.join(''));
    screen.textContent = total;
    clearAll();
});
