let firstName = "friend";
let userScore = 0;
let computerScore = 0;
let winningScore = 3;

const containerDiv = document.getElementsByClassName('container');
const playButton = document.getElementById('submit-name');
const gameBoardDiv = document.getElementById('game-board');
const userInputDiv = document.getElementById('user-input');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');



/** This variable will hold the HTML for the game options page */

let gameOptions = `
<div id="game-options-page">
    <p id="message">Please enter your name above to play game.</p>
    <div id="rules-video">
        <a id="video" href="https://www.youtube.com/watch?v=fqlDc2VICZ0" target="_blank" rel="noopener" aria-label="View video of rules (opens a new tab)">Rules Video</a>
    </div>
    <div id="rules">How to play
        <img class="hide" id="rules-image" src="assets/images/rules.png" alt="rules image">
    </div>
</div>
    <p id="user-options-message">Please select a game</p>
    <button class="game-button" id="short-game">First to 3</button>
    <button class="game-button" id="medium-game">First to 5</button>
    <button class="game-button" id="long-game">First to 10</button>
    `;

/** This variable hods the HTML for the short game */
let shortGame = `
<p id="action-message">Make your move!</p>
<div id="choices">
    <div class="choice" id="rock">
        <img src="assets/images/rock.png" alt="image of a paper shaped hand">
    </div>
    <div class="choice" id="paper">
        <img src="assets/images/paper.png" alt="image of a rock shaped fist">
    </div>
    <div class="choice" id="scissors">
        <img src="assets/images/scissors.png" alt="image of a scissor shaped hand">
    </div>
    <div class="choice" id="lizard">
        <img src="assets/images/lizard.png" alt="image of a lizard shaped hand">
    </div>
    <div class="choice" id="spock">
        <img src="assets/images/spock.png" alt="image of a spock shaped hand">
    </div>
</div>
<div class="result">
    <p>Can you beat the computer?</p>
</div>
<div class="scoreboard">
    <div id="user-label" class="badge">User</div>
    <div id="computer-label" class="badge">Comp</div>
    <span id="user-score">0</span>:<span id="computer-score">0</span>
</div>`

/** 
 * This functions will show and hide the game rules and how to play. 
 */

 function showRules() {
    const rules = document.getElementById('rules');
    const rulesImage = document.getElementById('rules-image');
    rules.addEventListener('click', function() {
    rulesImage.classList.toggle('hide');
    });
}

/**
 * This function will show the short game when the button is clicked
 */

 function shortGameSwitch() {
    const shortGameButton = document.getElementById('short-game');
    shortGameButton.addEventListener('click', function() {
        gameBoardDiv.innerHTML = shortGame;
    })
}

/**
 * This function will store the name. of the user
 */

function userInput() {
playButton.addEventListener('click', function() {
   let userInputName = document.getElementById('fname').value;
        firstName = userInputName;
        if(!userInputName) {
            document.getElementById('message').innerHTML = ('Please enter your name to play!');
        } else {
            gameBoardDiv.innerHTML = gameOptions; 
            document.getElementById('message').innerHTML = ('Hey ' + firstName + ' are you ready to play? Choose from the different game options below');
            userInputDiv.classList.add('hide');
            showRules();
            shortGameSwitch();
        }
})
}

userInput();

/**
 * This function will run if the user wins and display a message and increment the user score.
 */

 function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `${convertWord(userChoice)} beats ${convertWord(computerChoice)}. ${firstName} WINS!`;
    checkWinner();
}

/**
 * This function determines a winner between the users choice and 
 * the computer choice.
 * This will inturn run the win, lose or draw functions
 */

 function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'rocklizard':
        case 'paperrock':
        case 'paperspock':
        case 'scissorspaper':
        case 'scissorslizard':
        case 'lizardpaper':
        case 'lizardspock':
        case 'spockrock':
        case 'spockscissors':
            win(userChoice, computerChoice);
          break;
        case 'rockpaper':
        case 'lizardrock':
        case 'paperscissors':
        case 'spockpaper':
        case 'scissorsrock':
        case 'lizardscissors':
        case 'paperlizard':
        case 'spocklizard':
        case 'rockspock':
        case 'scissorsspock':
            lose(userChoice, computerChoice);
          break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        case 'lizardlizard':
        case 'spockspock':
            draw(userChoice, computerChoice);
          break;
    }
}

/**
 * This function will randomly pick one of the 5 choices
 * to play against the users choice.
 */

 function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

/**
 * This function listens for the users input of either Rock, Paper, Scissors,
 * Lizard or Spock and then plays the game function
 */

 function userButtons() {
    const rockDiv = document.getElementById('rock');
    rockDiv.addEventListener('click', function() {
        game('rock');
    });
    const paperDiv = document.getElementById('paper');
    paperDiv.addEventListener('click', function() {
        game('paper');
    });
    const scissorsDiv = document.getElementById('scissors');
    scissorsDiv.addEventListener('click', function() {
        game('scissors');
    });
    const lizardDiv = document.getElementById('lizard');
    lizardDiv.addEventListener('click', function() {
        game('lizard');
    });
        const spockDiv = document.getElementById('spock');
    spockDiv.addEventListener('click', function() {
        game('spock');
    });
}