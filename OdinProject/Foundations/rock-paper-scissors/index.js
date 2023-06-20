
const body = document.querySelector("body");
body.style.cssText = 'padding: 10px; margin: 0px; border: 0px; background: url("assets/pexels-johannes-plenio-1103970.jpg"); background-size: 2000px 2000px'

const main_div = document.createElement('div');

main_div.style.cssText = "padding: 20px;  margin: 50px; border: 2px; text-align: center"

const rock_button = document.createElement('button');
const scissors_button = document.createElement('button');
const paper_button = document.createElement('button');
const newGameButton = document.createElement('button')

newGameButton.innerText = "New Game"
newGameButton.style.cssText = "margin-left: 50%"
rock_button.innerHTML = "<img src='assets/rock.png' style= 'height: 150px; width: 150px' >"
scissors_button.innerHTML = "<img src='assets/scissors.png' style = 'height: 150px; width: 150px'>"
paper_button.innerHTML = "<img src='assets/paper.png' style = 'height: 150px; width: 150px'>"

const images = document.querySelector('img');



main_div.appendChild(rock_button);
main_div.appendChild(paper_button);
main_div.appendChild(scissors_button);
body.appendChild(main_div);
body.appendChild(newGameButton)













function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()*choices.length);
    return(choices[randomNumber]);
}
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    while (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
        playerSelection = window.prompt("Invalid weapon! Try again: ");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
    
    if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Scissors" && computerSelection == "Rock") || (playerSelection == "Paper" && computerSelection == "Scissors")) {
        return 1;
    } else if (playerSelection ==  computerSelection) {
        return 0;
    }else {
        return 2;
    }
}


// let game = () => {
//     let player = 0, computer = 0;
//     for(let i = 0; i < 5; i++){
//         let playerSelection = window.prompt("Choose your weapon: ").trim();
//         computerSelection = getComputerChoice();
//         result = playRound(playerSelection, computerSelection);
//         switch (result) {
//             case 1:
//                 computer++;
//                 break;
//             case 2:
//                 player++;
//                 break;
//             default:
//                 break;
//         }
//     }

//     if(player > computer) {
//         return("You win!! The result is " + player + " - " + computer + ".");
//     }else if (player < computer) {
//         return("You lose!! The result is " + player + " - " + computer + ".");
//     }else {
//         return("Tie!!");
//     }
// }

// console.log(game());