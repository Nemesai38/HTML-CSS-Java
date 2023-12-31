const buttons = document.querySelector('button');

function alertBtn() {
    alert('Java-tins');
};

buttons.addEventListener('click', alertBtn);

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
};

newBackgroundColor.addEventListener('mouseover', changeBgColor);
