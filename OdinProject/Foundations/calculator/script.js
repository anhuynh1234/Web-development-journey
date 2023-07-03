let line = '', savedNum = '', operation = ''

const numbKeys = document.querySelectorAll('.numbers')
const display = document.querySelector(".display .text span")
const equal = document.querySelector("#equal")
const clear = document.querySelector('#clear')
const operators = document.querySelectorAll('.operator')
const specials = document.querySelectorAll('.special')

numbKeys.forEach((number) => {
    number.addEventListener('click', () => {
        line += number.innerText;
        display.innerText = line
    })
})

clear.addEventListener('click', () => {
    line = '';
    operation = ';'
    display.innerText = "";
    savedNum = '';
})

operators.forEach((operator) => {
    operator.addEventListener('click', ()=> {
        if((line != '' && line != '-')){
            savedNum = line;
            line = ''
            operation = operator.innerText;
        }else if(operation != ''){
            operation = operator.innerText;
        }
    })
})

specials.forEach((special)=>{
    special.addEventListener('click', () => {
        switch(special.innerText){
            case '%':
                if(line != ""){
                    let tempNum = Number(line);
                    tempNum /= 100;
                    line = tempNum.toString();
                }
                break;
            case '(-)':
                line = '-' + line;
        }
        display.innerText = line;
    })
})

equal.addEventListener('click', () => {
    if(savedNum != '' && operation != '' ){
        let displayNum = 0;
        switch(operation){
            case('+'):
                displayNum = Number(savedNum) + Number(line);
                break;
            case('-'):
                displayNum = Number(savedNum) - Number(line);
                break;
            case('*'):
                displayNum = Number(savedNum) * Number(line);
                break;
            case('/'):
                displayNum = Number(savedNum) / Number(line);
                break;
        }
        display.innerText = displayNum.toString();
        line = displayNum.toString();
        operation = '';
        savedNum = ''
    }
})
