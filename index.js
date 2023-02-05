const playerText =document.querySelector("#playerText");
const computerText =document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceButtons = document.querySelectorAll(".choiceButton");

let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener("click", () => {
 
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber){
        case 1:
            computer = "Rock";
            break;
        
        case 2:
            computer = "Paper";
            break;
        
        case 3:
            computer = "Scissors";
            break;
        
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "Rock"){
        return (player == "Paper") ? "You Win!" : "You lose! Try Again"
    }
    else if(computer == "Paper"){
        return (player == "Scissors") ? "You Win!" : "You lose! Try Again"
    }
    else if(computer == "Scissors"){
        return (player == "Rock") ? "You Win!" : "You lose! Try Again"
    }
}