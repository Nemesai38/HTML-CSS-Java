for (let i = 0; i < 16; i++) {
    const maincontainer = document.querySelector('.main');
    const longdivs = document.createElement('div');
    longdivs.setAttribute('class', 'cards')
    longdivs.style.border = '3px solid black';
    for (let x = 0; x < 16; x++) {
        const smalldivs = document.createElement('div')
        smalldivs.style.width = '100px';
        smalldivs.style.height = '100px';
        smalldivs.style.border = '3px solid black'
        smalldivs.style.backgroundColor = 'violet'
        smalldivs.style.transition = '0.5s'
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




