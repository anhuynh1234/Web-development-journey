
const content = document.querySelector('body #container');
const p = document.createElement('p');
p.textContent = "Hey! I'm red!";
p.style.color = 'red';
p.classList.add('para');
content.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = 'Hey! I\'m a blue h3!!';
h3.style.color = 'blue';
h3.style['background-color'] = "grey";
h3.setAttribute('id', 'heading3');
content.appendChild(h3);

const div = document.createElement('div');
const newP = document.createElement('p');
const newh1 = document.createElement('h1');
const newElement = document.createElement('div')

newP.textContent = "ME TOO!!";
newh1.textContent = "I'm a div!!";

div.style.cssText = 'border-color: black; border-style: solid; background-color: pink';
newElement.style.cssText = 'border-color: green; border-style: solid'
newElement.innerHTML = "<h1>this is me</h1>"
newElement.style.color = "grey"
div.appendChild(newh1);
div.appendChild(newP);

content.appendChild(div);
content.append(newElement);