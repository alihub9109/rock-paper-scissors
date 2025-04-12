/*
    1. DEFINE function getComputerChoice:
    - Generate a random number between 0 and 1 using Math.random()
    - IF number < 0.33 → RETURN "rock"
    - ELSE IF number < 0.66 → RETURN "paper"
    - ELSE → RETURN "scissors"

    2. DEFINE function getHumanChoice:
        - USE prompt() to ask the user for "rock", "paper", or "scissors"
        - RETURN the user's input

    3. DECLARE variable humanScore = 0 (global scope)
    4. DECLARE variable computerScore = 0 (global scope)

    5. DEFINE function playRound(humanChoice, computerChoice):
        - Convert humanChoice to lowercase
        - COMPARE humanChoice and computerChoice:
            - IF same → log "It's a tie!"
            - ELSE IF human beats computer → log "You win!" and increment humanScore
            - ELSE → log "Computer wins!" and increment computerScore

    6. DEFINE function playGame:
        - RESET humanScore and computerScore to 0
        - REPEAT the following 5 times:
            - CALL getHumanChoice() → store in humanChoice
            - CALL getComputerChoice() → store in computerChoice
            - CALL playRound(humanChoice, computerChoice)
        - AFTER 5 rounds:
            - DISPLAY both scores
            - DECLARE final winner based on scores

    7. CALL playGame() to start the game

*/




/*
    1. DEFINE function getComputerChoice:
    - Generate a random number between 0 and 1 using Math.random()
    - IF number < 0.33 → RETURN "rock"
    - ELSE IF number < 0.66 → RETURN "paper"
    - ELSE → RETURN "scissors"
*/

function getComputerChoice() {
    let randomNum = Math.random(); // value between 0 and 1

    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


/*
    2. DEFINE function getHumanChoice:
        - USE prompt() to ask the user for "rock", "paper", or "scissors"
        - RETURN the user's input
*/

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

/*
    3. DECLARE variable humanScore = 0 (global scope)
    4. DECLARE variable computerScore = 0 (global scope)
*/

let humanScore = 0;
let computerScore = 0;

/*
    5. DEFINE function playRound(humanChoice, computerChoice):
        - Convert humanChoice to lowercase
        - COMPARE humanChoice and computerChoice:
            - IF same → log "It's a tie!"
            - ELSE IF human beats computer → log "You win!" and increment humanScore
            - ELSE → log "Computer wins!" and increment computerScore
*/
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    }
    else {
        console.log("Computer wins!");
        computerScore++;
    }
}


/*
    6. DEFINE function playGame:
        - RESET humanScore and computerScore to 0
        - REPEAT the following 5 times:
            - CALL getHumanChoice() → store in humanChoice
            - CALL getComputerChoice() → store in computerChoice
            - CALL playRound(humanChoice, computerChoice)
        - AFTER 5 rounds:
            - DISPLAY both scores
            - DECLARE final winner based on scores
*/

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Final Scores:");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}


/*
    7. CALL playGame() to start the game
*/
playGame();
