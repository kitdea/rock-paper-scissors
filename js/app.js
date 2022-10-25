const app = document.querySelector('#app');
const header = document.createElement('h1');

const headerContent = document.createTextNode('Rock. Paper. Scissor. 🚀',
);
header.appendChild(headerContent);
app.appendChild(header);

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let playerSelection ;
let computerSelection;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerSelection = e.target.id
  userChoiceDisplay.innerHTML = playerSelection;
  getComputerChoice();
  game();
}));

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if(randomNumber === 1) {
    computerSelection = 'rock';
  }

  else if(randomNumber === 2) {
    computerSelection = 'scissor';
  }

  else if(randomNumber === 3) {
    computerSelection = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerSelection;
}

function game() {
  if(computerSelection === playerSelection) {
    result = 'Its a draw!';
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    result = 'You win!';
  } else if (computerSelection === 'rock' && playerSelection === 'scissor') {
    result = 'You lose!';
  } else if (computerSelection === 'paper' && playerSelection === 'scissor') {
    result = 'You win!';
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    result = 'You lose';
  } else if (computerSelection === 'scissor' && playerSelection === 'rock') {
    result = 'You win!';
  } else if (computerSelection === 'scissor' && playerSelection === 'paper') {
    result = 'You lose!';
  }
  resultDisplay.innerHTML = result;
};