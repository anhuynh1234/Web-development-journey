
let size = 2;
let maxSize = 100
let downClick = false;

const body = document.querySelector('body');
body.style.cssText = "display: flex; align-items: center; justify-content: center; padding 10px; background-color: #ADDFAD; flex-direction: column"

const welcomeMessage = document.createElement('div');
const clear = document.createElement('button')
const sizeForm = document.createElement('form')

sizeForm.style.cssText = 'margin: 10px; '
sizeForm.innerHTML = "<p><label for=\"size\">Size (max 100):</label><input type=\"text\" size=\"4\" maxlength='3' id='size' name='size'><br><input type = 'button' value='Submit' class='submit'></p>"

const submit = sizeForm.querySelector('.submit')

welcomeMessage.innerHTML = "<p>Welcome to Etch-a-sketch</p>"
clear.innerText = "Clear"
clear.style.cssText = "margin: 20px;"

const mainDiv = document.createElement('div');
mainDiv.style.cssText = "height: 500px; width: 500px; text-align: center; justify-content: center; background-color: white; display: flex; flex-direction: column"

makeGrids(size);
console.log(mainDiv.innerHTML)
let grids = mainDiv.querySelectorAll('.grids');

// console.log(grids)

submit.addEventListener('click', () => {
    const newSize = sizeForm.querySelector('#size').value
    if(newSize != 0){
        size = newSize;
        makeGrids(Number(size))
        grids = mainDiv.querySelectorAll('.grids');
    }
    grids = mainDiv.querySelectorAll('.grids');

    grids.forEach((grid) => {
        grid.addEventListener('mousedown', () => {
            grid.style.backgroundColor = 'blue';
            downClick = true
        });
    })
    
    grids.forEach((grid) => {
        grid.addEventListener('mousemove', () => {
            if(downClick){
                grid.style.backgroundColor = 'blue';
            }
        });
    })
    
    grids.forEach((grid) => {
        grid.addEventListener('mouseup', () => {
            // if(downClick){
            //     grid.style.backgroundColor = 'blue';
            // }
            downClick = false;
        });
    })
    
    
    
    clear.addEventListener('click', () => {
        grids.forEach((grid) => {
            grid.style.backgroundColor = 'orange';
        })
    })

})

grids.forEach((grid) => {
    grid.addEventListener('mousedown', () => {
        grid.style.backgroundColor = 'blue';
        downClick = true
    });
})

grids.forEach((grid) => {
    grid.addEventListener('mousemove', () => {
        if(downClick){
            grid.style.backgroundColor = 'blue';
        }
    });
})

grids.forEach((grid) => {
    grid.addEventListener('mouseup', () => {
        // if(downClick){
        //     grid.style.backgroundColor = 'blue';
        // }
        downClick = false;
    });
})



clear.addEventListener('click', () => {
    grids.forEach((grid) => {
        grid.style.backgroundColor = 'orange';
    })
})

body.appendChild(welcomeMessage)
body.appendChild(mainDiv);
body.appendChild(clear)
body.appendChild(sizeForm)


function makeGrids(size){
    mainDiv.textContent = "";
    for(let i = 0; i < size; i++){
        const subDiv = document.createElement('div');
        subDiv.style.cssText = "height: auto; width: auto; background-color: blue; display: flex; color: transparent; flex: 1 1 0;"
        for(let j = 0; j < size; j++){
            const smallDiv = document.createElement('div');
            smallDiv.style.cssText = 'flex: 1 1 0; height = auto; width: auto; border-color: red; border-style: solid; background-color: orange; font-size: 0.5px;'
            smallDiv.innerText  = ' ';
            smallDiv.classList.add('grids')
            subDiv.appendChild(smallDiv);
        }
        mainDiv.appendChild(subDiv)
    }
}
