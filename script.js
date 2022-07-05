let playerScore = 0
let robotScore = 0
let rounds = 0;
let playedRounds= 0;


function computerPlay(){
    let move = ["Rock", "Paper", "Scissors"]
    return move[Math.floor(Math.random()*move.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();;;
    if(playerSelection == computerSelection) {
            console.log("It's a draw!")

    } else if(playerSelection == "Rock" && computerSelection == "Scissors"){
            console.log("You Win! Rock beats Scissors.")
            playerScore++;

    }   else if(playerSelection == "Scissors" && computerSelection == "Rock"){
            console.log("You Lose! Rock beats Paper.")
            robotScore++;

    }   else if(playerSelection == "Rock" && computerSelection == "Paper"){
            console.log("You Lose! Paper beats Rock.")
            robotScore++;

    }   else if(playerSelection == "Paper" && computerSelection == "Rock"){
            console.log("You Win! Paper beats Rock.")
            playerScore++;

    }   else if(playerSelection == "Paper" && computerSelection == "Scissors"){
            console.log("You Lose! Scissors beats Paper.")
            robotScore++;
    }   else if(playerSelection == "Scissors" && computerSelection == "Paper"){
            console.log("You Win! Scissors beats Paper.")
            playerScore++;
    }

    console.log("Your score: " + playerScore);
    console.log("Robot score: " + robotScore);

    if(playedRounds == rounds){
        if(playerScore > robotScore){
            console.log("YOU WON COWBOY!");
        } else if(robotScore > playerScore){
            console.log("you lost... how?")
        } else {
            console.log("It's a draw chief")
        }
    }
}

function game(){
    rounds = parseInt(prompt("Who many rounds you want to play?"));;

    for (let i = 0; i < rounds; i++) {
        playerSelection = prompt("What you choosing cowboy?");
        computerSelection = computerPlay();
        console.log(" ");
        console.log("You choosed " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " cowboy.");;;;
        console.log("The robot choosed " + computerSelection + ".");

        playedRounds++;
        playRound(playerSelection, computerSelection);
        
     }  
}
