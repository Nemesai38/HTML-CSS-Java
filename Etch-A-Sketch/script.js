function createpad() {
    let len = prompt('Enter the Side Pixels you wish.');
    if (len < 0 || len > 100 || len % 1 != 0) {
        alert('Please enter a whole number less than 100!!');
    } else { let newlen = Math.sqrt((2560000/len**2));
        for (let i = 0; i < len; i++) {
            const maincontainer = document.querySelector('.main');
            const longdivs = document.createElement('div');
            longdivs.setAttribute('class', 'cards')
            let finallen = newlen.toString() + 'px';
            for (let x = 0; x < len; x++) {
                const smalldivs = document.createElement('div')
                smalldivs.style.width = finallen;
                smalldivs.style.height = finallen;
                smalldivs.style.backgroundColor = 'violet'
                smalldivs.style.transition = '0.1s'
                smalldivs.addEventListener('mouseover', () => {
                    smalldivs.style.backgroundColor = 'rgba(245, 245, 245, 0.7)'
                })
                smalldivs.addEventListener('mouseout', () => {
                    smalldivs.style.backgroundColor = 'blueviolet'
                })
                longdivs.appendChild(smalldivs);
            }
            maincontainer.appendChild(longdivs);
        }
    }
}

let create = document.querySelector('#padsizebtn');
create.addEventListener('click', createpad);