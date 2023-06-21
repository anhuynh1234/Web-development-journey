
const body = document.querySelector("body");
body.style.cssText = 'padding: 10px; margin: 0px; border: 0px; background: url("assets/pexels-johannes-plenio-1103970.jpg"); background-size: 2000px 2000px'

const main_div = document.createElement('div');

main_div.style.cssText = "padding: 20px;  margin: 50px; border: 2px; text-align: center"

const rock_button = document.createElement('button');
rock_button.classList.add('weapon')
rock_button.setAttribute('id', 'Rock')
const scissors_button = document.createElement('button');
scissors_button.classList.add('weapon')
scissors_button.setAttribute('id', 'Scissors')
const paper_button = document.createElement('button');
paper_button.classList.add('weapon')
paper_button.setAttribute('id', 'Paper')
const newGameButton = document.createElement('button')

newGameButton.innerText = "New Game"
newGameButton.style.cssText = "margin-left: 47%"
rock_button.innerHTML = "<img src='assets/rock.png' style= 'height: 150px; width: 150px' >"
scissors_button.innerHTML = "<img src='assets/scissors.png' style = 'height: 150px; width: 150px'>"
paper_button.innerHTML = "<img src='assets/paper.png' style = 'height: 150px; width: 150px'>"

const images = document.querySelector('img');

const content = document.createElement('div');
const userScoreLine = document.createElement('p')
const compScoreLine = document.createElement('p')
const winnerAnnouncer = document.createElement('p')

content.style.cssText = "padding: 10px; text-align: center"
content.innerHTML = "<p style=\"font-family: Arial, Helvetica, sans-serif\">Welcome to Rock Paper Scissors</p> <p style=\"font-family: Arial, Helvetica, sans-serif\">Please click \"New Game\" to start a new game!</p>"
content.appendChild(userScoreLine);
content.appendChild(compScoreLine);
content.appendChild(winnerAnnouncer);

main_div.appendChild(rock_button);
main_div.appendChild(paper_button);
main_div.appendChild(scissors_button);
body.appendChild(main_div);
body.appendChild(newGameButton);
body.appendChild(content);


newGameButton.addEventListener('click', playGame);
let userScore = 0, compScore = 0;
let gameplay = false;


rock_button.addEventListener('click', () => {
    if(!gameplay){
        return;
    }

    let userSelection = document.createElement('p')
    userSelection.textContent = "Rock"
    let computerSelection = getComputerChoice();
    console.log(userSelection.textContent)
    let result = playRound(userSelection.textContent, computerSelection);

    switch (result){
        case 1:
            compScore++;
            break;
        case 2:
            userScore++;
            break;
    }
    compScoreLine.textContent = `Computer: ${compScore}`
    userScoreLine.textContent = `You: ${userScore}`

    
    if(userScore - compScore == 5 || compScore - userScore == 5){
        let winner = "";
        if (userScore > compScore){
            winner = "You";
        }else{
            winner = 'Computer'
        }
        winnerAnnouncer.textContent = `The winner is: ${winner}`;
        gameplay = false
    }
})
paper_button.addEventListener('click', () => {
    if(!gameplay){
        return;
    }
    
    let userSelection = document.createElement('p')
    userSelection.textContent = "Paper"
    let computerSelection = getComputerChoice();
    console.log(userSelection.textContent)
    let result = playRound(userSelection.textContent, computerSelection);

    switch (result){
        case 1:
            compScore++;
            break;
        case 2:
            userScore++;
            break;
    }

    compScoreLine.textContent = `Computer: ${compScore}`
    userScoreLine.textContent = `You: ${userScore}`


    if(userScore - compScore == 5 || compScore - userScore == 5){
        let winner = "";
        if (userScore > compScore){
            winner = "You";
        }else{
            winner = 'Computer'
        }
        winnerAnnouncer.textContent = `The winner is: ${winner}`;
        gameplay = false
    }
})

scissors_button.addEventListener('click', () => {
    if(!gameplay){
        return;
    }

    let userSelection = document.createElement('p')
    userSelection.textContent = "Scissors"
    let computerSelection = getComputerChoice();
    console.log(userSelection.textContent)
    let result = playRound(userSelection.textContent, computerSelection);

    switch (result){
        case 1:
            compScore++;
            break;
        case 2:
            userScore++;
            break;
    }

    compScoreLine.textContent = `Computer: ${compScore}`
    userScoreLine.textContent = `You: ${userScore}`


    if(userScore - compScore == 5 || compScore - userScore == 5){
        let winner = "";
        if (userScore > compScore){
            winner = "You";
        }else{
            winner = 'Computer'
        }
        winnerAnnouncer.textContent = `The winner is: ${winner}`;
        gameplay = false
    }
}) 


function playGame(){    
    userScore = 0
    compScore = 0
    userScoreLine.textContent = "You: 0"
    compScoreLine.textContent = "Computer: 0"
    gameplay = true
    winnerAnnouncer.textContent = ""
}



function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()*choices.length);
    return(choices[randomNumber]);
}

function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Scissors" && computerSelection == "Rock") || (playerSelection == "Paper" && computerSelection == "Scissors")) {
        return 1;
    } else if (playerSelection ==  computerSelection) {
        return 0;
    }else {
        return 2;
    }
}
