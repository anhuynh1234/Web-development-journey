
let size = 64;
let maxSize = 100

const body = document.querySelector('body');
body.style.cssText = "text-align: center; padding 10px; background-color: grey"

const mainDiv = document.createElement('div');
mainDiv.style.cssText = "height: 10px; width: 200px"

for(let i = 0; i < size; i++){
    const subDiv = document.createElement('div');
    for(let j = 0; j < size; j++){
        const smallDiv = document.createElement('div');
        smallDiv.style.cssText = 'height = auto; width: auto; border-color: white; border-style: solid; background-color: blue'
        subDiv.appendChild(smallDiv);
    }
    mainDiv.appendChild(subDiv)
}




body.appendChild(mainDiv);