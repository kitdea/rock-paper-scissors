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
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if(randomNumber === 1) {
    computerChoice = 'rock';
  }

  else if(randomNumber === 2) {
    computerChoice = 'scissor';
  }

  else if(randomNumber === 3) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if(computerChoice === userChoice) {
    result = 'Its a draw!';
  } else if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'You win!';
  } else if (computerChoice === 'rock' && userChoice === 'scissor') {
    result = 'You lose!';
  } else if (computerChoice === 'paper' && userChoice === 'scissor') {
    result = 'You win!';
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You lose';
  } else if (computerChoice === 'scissor' && userChoice === 'rock') {
    result = 'You win!';
  } else if (computerChoice === 'scissor' && userChoice === 'paper') {
    result = 'You lose!';
  }
  console.log(result);
  resultDisplay.innerHTML = result;
};

// Computer random choice
const choiceSelection = ['rock', 'paper', 'scissor'];

const getComputerChoice = (choiceSelection) => {
  let numberOfChoices = choiceSelection.length;
  let randomAnswer = Math.floor(Math.random() * numberOfChoices);
  let itemChoice = choiceSelection[randomAnswer];
  return itemChoice + ' ang pamato ni Kumander Bawang';
};
let computerResponse = getComputerChoice(choiceSelection);
// console.log(computerResponse);

// Play the game
const select = ['rock', 'paper', 'scissor'];

const playerChoice = (select) => {
  let choices = select.length;
  let randomChoice = Math.floor(Math.random() * choices);
  let selectChoice = select[randomChoice];
  return selectChoice + ' ang pamato ni Heneral Sibuyas';
};
let playerResponse = playerChoice(select);

const playRound = (playerSelection, computerSelection) => {
  (playerSelection === computerSelection) ?
    console.log('Its a tie') : console.log('Not')
  
};

const computerSelection = computerResponse;
const playerSelection = playerResponse;
const palakat = playRound(playerSelection, computerSelection);
console.log(playerSelection);
console.log(computerSelection);
console.log(palakat);


