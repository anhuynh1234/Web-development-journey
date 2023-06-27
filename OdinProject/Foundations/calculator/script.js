let errorMath = false
let line = ""

const body = document.querySelector('body')

const numbKeys = document.querySelectorAll('.numbers')
const display = document.querySelector(".display .text")

numbKeys.forEach((number) => {
    number.addEventListener('click', () => {
        line += number.innerText;
        display.innerText = line;
    })
})