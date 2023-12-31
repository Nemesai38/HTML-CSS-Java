// DOM Manipulation

const title = document.querySelector('#main-heading');

title.style.color = 'red';

// Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Element

ul.append(li);

// Modifying the text

li.innerText = 'X-Men';

// Modifying Attributes & Classes


// Remove Elements

li.remove()

// Element Heirachy

/* console.log(ul.parentNode);
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild); */
//console.log(ul.children);

console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

