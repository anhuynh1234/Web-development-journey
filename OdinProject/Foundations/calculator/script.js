let errorMath = false
let line = []
let numbers = '1234567890'.split()
let specialChars = ['.', '%', '(-)']
let operatorsChar = Array.from('+-*/')


const numbKeys = document.querySelectorAll('.numbers')
const display = document.querySelector(".display .text span")
const equal = document.querySelector("#equal")
const clear = document.querySelector('#clear')
const operators = document.querySelectorAll('.operator')
const specials = document.querySelectorAll('.special')

numbKeys.forEach((number) => {
    number.addEventListener('click', () => {
        if(line == "ERROR!"){
            line = [];
            errorMath = false;
        }
        line.push(number.innerText)
        display.innerText = line.join('')
    })
})

clear.addEventListener('click', () => {
    errorMath = false;
    line = [];
    display.innerText = "";
})

operators.forEach((operator) => {
    operator.addEventListener('click', ()=> {
        if(line == "ERROR!"){
            line = [];
            errorMath = false;
        }
        if(line == []){
            errorMath = true;
        }
        line.push(operator.innerText)
        display.innerText = line.join('')
    })
})

specials.forEach((special)=>{
    special.addEventListener('click', () => {
        if(line[0] == "ERROR!"){
            line = [];
            errorMath = false;
        }

        if(line == []){
            errorMath = true;
        }
        line.push(special.innerText);
        display.innerText = line.join('');
    })
})

equal.addEventListener('click', () => {
    if(errorMath){
        line.push("ERROR!");
        display.innerText = line.join('');
    }
    let result = performCalc(line)
    line = [];
    line.push(result);
    display.innertext = line.join('');
})


function performCalc(line){
    let numb = 0, multiple = 0;
    let order = []

    for(let i = 1; i < line.length; i++){
        if(numbers.includes(line[i])){
            
        }
    }
}