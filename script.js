let playerScore = 0
let robotScore = 0


function computerPlay(){
    let move = ["Rock", "Paper", "Scissors"]
    return move[Math.floor(Math.random()*move.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();;;
    if(playerSelection == computerSelection) {
            console.log("It's a draw!")
            console.log("Your score: " + playerScore);
            console.log("Robot score: " + robotScore);
    } else if(playerSelection == "Rock" && computerSelection == "Scissors"){
            console.log("You Win! Rock beats Scissors.")
            console.log("Your score: " + playerSocre++);
            console.log("Robot score: " + robotScore);
    }   else if(playerSelection == "Scissors" && computerSelection == "Rock"){
            console.log("You Lose! Rock beats Paper.")
            console.log("Your score: " + playerScore);
            console.log("Robot score: " + robotScore++);
    }   else if(playerSelection == "Rock" && computerSelection == "Paper"){
            console.log("You Lose! Paper beats Rock.")
            console.log("Your score: " + playerScore);
            console.log("Robot score: " + robotScore++);
    }   else if(playerSelection == "Paper" && computerSelection == "Rock"){
            console.log("You Win! Paper beats Rock.")
            console.log("Your score: " + playerScore++);
            console.log("Robot score: " + robotScore);
    }   else if(playerSelection == "Paper" && computerSelection == "Scissors"){
            console.log("You Lose! Scissors beats Paper.")
            console.log("Your score: " + playerScore);
            console.log("Robot score: " + robotScore++);
    }   else if(playerSelection == "Scissors" && computerSelection == "Paper"){
            console.log("You Win! Scissors beats Paper.")
            console.log("Your score: " + playerScore++);
            console.log("Robot score: " + robotScore);
    }
}

function game(){
    for (let i = 0; i < 5; i++) {

        playerSelection = prompt("What you choosing cowboy?");
        computerSelection = computerPlay();
        console.log("You choosed " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " cowboy.");;;;
        console.log("The robot choosed " + computerSelection + ".");

        playRound(playerSelection, computerSelection);
     }
}
