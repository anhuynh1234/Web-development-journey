
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()*choices.length);
    return(choices[randomNumber]);
}

let playRound = function(playerSelection, computerSelection) {

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


let game = () => {
    let player = 0, computer = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = window.prompt("Choose your weapon: ").trim();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        switch (result) {
            case 1:
                computer++;
                break;
            case 2:
                player++;
                break;
            default:
                break;
        }
    }

    if(player > computer) {
        return("You win!! The result is " + player + " - " + computer + ".");
    }else if (player < computer) {
        return("You lose!! The result is " + player + " - " + computer + ".");
    }else {
        return("Tie!!");
    }
}

console.log(game());