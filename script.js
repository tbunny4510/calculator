const nums = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const clear = document.querySelector('#clear');

let total = 5;
let arr = [];

let add = (n1, n2) => n1 + n2;
let subtract = (n1, n2) => n1 - n2;
let multiply = (n1, n2) => n1 * n2;
let divide = (n1, n2) => n1 / n2;

nums.forEach((num) => {
    num.addEventListener('click', () => {
        arr.push(num.value);
        screen.textContent = arr.join('');
    })
});


clear.addEventListener('click', () => {
    total = 0;
    arr = [];
    screen.textContent = total;
});
