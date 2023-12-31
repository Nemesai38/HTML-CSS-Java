
// DOM Manipulation

// Event Delegation

// It allows users to append a SINGLE event listener to a 
// parent element that adds it to all of its present AND 
// future descendants that match a selector.

document.querySelector('#football').addEventListener
('click', function(e) {
    console.log('football is clicked');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#basketball').addEventListener
('click', function(e) {
    console.log('basketball is clicked');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#boxing').addEventListener
('click', function(e) {
    console.log('boxing is clicked');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#tennis').addEventListener
('click', function(e) {
    console.log('tennis is clicked');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#golf').addEventListener
('click', function(e) {
    console.log('golf is clicked');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})