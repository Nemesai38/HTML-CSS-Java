const output = document.querySelector('#countdownnum');
output.innerHTML = '';

function countdown() {
    const para = document.createElement('p')
    for (i = 10; i >=0 ; i--) {
        if (i === 10) {
            para.textContent += 'Countdown 10\n'
        } else if (i === 0) {
            para.textContent += 'Blast Off!!\n'
        } else {
            para.textContent += `${i}\n`;
        }

        output.appendChild(para);

    }
}

const btn = document.querySelector('#countdownbtn')

btn.addEventListener('click', countdown);