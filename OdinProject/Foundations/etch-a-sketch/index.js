
let size = 20;
let maxSize = 100

const body = document.querySelector('body');
body.style.cssText = "display: flex; align-items: center; justify-content: center; padding 10px; background-color: #ADDFAD; flex-direction: column"

const welcomeMessage = document.createElement('div');

welcomeMessage.innerHTML = "<p>Welcome to Etch-a-sketch</p>"

const mainDiv = document.createElement('div');
mainDiv.style.cssText = "height: 500px; width: 500px; text-align: center; justify-content: center; background-color: white; display: flex; flex-direction: column"

    for(let i = 0; i < size; i++){
        const subDiv = document.createElement('div');
        subDiv.style.cssText = "height: auto; width: auto; background-color: blue; display: flex; color: transparent; flex: 1 1 0;"
        for(let j = 0; j < size; j++){
            const smallDiv = document.createElement('div');
            smallDiv.style.cssText = 'flex: 1 1 0; height = auto; width: auto; border-color: red; border-style: solid; background-color: orange; font-size: 0.5px;'
            smallDiv.innerText  = 0;
            smallDiv.classList.add('grids')
            subDiv.appendChild(smallDiv);
        }
        mainDiv.appendChild(subDiv)
    }

const grids = document.getElementsByClassName('grids');

body.appendChild(welcomeMessage)
body.appendChild(mainDiv);