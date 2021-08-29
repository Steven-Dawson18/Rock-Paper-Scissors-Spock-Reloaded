let firstName = "friend";
let userScore = 0;
let computerScore = 0;
let winningScore = 3;

const containerDiv = document.getElementsByClassName('container');
const playButton = document.getElementById('submit-name');
const gameBoardDiv = document.getElementById('game-board');
const userInputDiv = document.getElementById('user-input');

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

/** This variable will hold the game rules html */

let gameRules = `
<div id="game-rules-page">
    <div id="poem">
    <h2 id="play-rules"> Rules</h2>
    <p>Sicssors cuts Paper</p>
    <p>Paper covers Rock</p>
    <p>Rock crushes Lizard</p>
    <p>Lizard poisons Spock</p>
    <p>Spock smashes Scissors</p>
    <p>Sicssors decapitates Lizard</p>
    <p>Lizard eats Paper</p>
    <p>Paper disproves Spock</p>
    <p>Spock vaporizes Rock</p>
    <p>and, as it always has,</p>
    <p>Rock crushes Scissors</p>
    </div>
    <div id="game-selection>
        <h3 class="rules-title>First to 3 wins</h3>
        <p id="first-to-three">In this game mode you play against the computer until either you or the computer reaches 3 wins and then a winner is called.</p>
        <h3 class="rules-title">First to 5 wins</h3>
        <p id="first-to-five">In this game mode you play against the computer until either you or the computer reaches 5 wins and then a winner is called.</p>
        <h3 class="rules-title">First to 10 wins</h3>
        <p id="first-to-ten">In this game mode you play against the computer until either you or the computer reaches 10 wins and then a winner is called.</p>
    </div>
    <button id="game-options-btn" class="btn">Game Options</button>
</div>`

/** 
 * This functions will show the game rules and how to play. 
 */

 function showRules() {
    const rules = document.getElementById('rules');
    rules.addEventListener('click', function() {
    gameBoardDiv.innerHTML = gameRules;
    document.getElementById('game-options-btn').addEventListener('click', gameSetUp);
    });
}

// function hideRules() {
//     document.getElementById('game-options-btn').addEventListener('click', gameSetUp);
// }

/**
 * This function will show the short game when the button is clicked
 */

 function shortGameSwitch() {
    const shortGameButton = document.getElementById('short-game');
    shortGameButton.addEventListener('click', function() {
        winningScore = 3;
        gameBoardDiv.innerHTML = shortGame;
        userButtons()
    })
}

/**
 * This function will show the medium game when the button is clicked
 */
function mediumGameSwitch() {
    const mediumGameButton = document.getElementById('medium-game');
    mediumGameButton.addEventListener('click', function() {
        winningScore = 5;
        gameBoardDiv.innerHTML = shortGame;
        userButtons()
    })
}

/**
 * This function will show the long game when the button is clicked
 */
function longGameSwitch() {
    const longGameButton = document.getElementById('long-game');
    longGameButton.addEventListener('click', function() {
        gameSwitch(10);
    })
}

function gameSwitch(score) {
    winningScore = score;
    gameBoardDiv.innerHTML = shortGame;
    userButtons();
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
            gameSetUp();
        }
})
}

/**
 * This function allows the user to select the game of their choice
 * and relays a message back to the user.
 */
function gameSetUp() {
    userScore = 0;
    computerScore = 0;
    gameBoardDiv.innerHTML = gameOptions; 
    document.getElementById('message').innerHTML = ('Hey ' + firstName + ' are you ready to play? Choose from the different game options below');
    userInputDiv.classList.add('hide');
    showRules();
    shortGameSwitch();
    mediumGameSwitch();
    longGameSwitch();
}

userInput();

/**
 * This function will display the user and computer choice
 * with a capital first letter to the user.
 */

 function convertWord(word) {
    if(word === 'rock') return 'Rock';
    if(word === 'paper') return 'Paper';
    if(word === 'scissors') return 'Scissors';
    if(word === 'lizard') return 'Lizard';
    if(word === 'spock') return 'Spock';
}

/**
 * This function will run if the user wins and display a message and increment the user score.
 */

 function win(userChoice, computerChoice) {
    userScore++;
    const userScoreSpan = document.getElementById('user-score');
    const computerScoreSpan = document.getElementById('computer-score');
    const resultDiv = document.querySelector('.result > p');
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `${convertWord(userChoice)} beats ${convertWord(computerChoice)}. ${firstName} WINS!`;
    checkWinner();
}

/**
 * This function will run if the computer wins and display a message and increment the computer score.
 */

 function lose(userChoice, computerChoice) {
    computerScore++;
    const userScoreSpan = document.getElementById('user-score');
    const computerScoreSpan = document.getElementById('computer-score');
    const resultDiv = document.querySelector('.result > p');
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `${convertWord(userChoice)} loses to ${convertWord(computerChoice)}. ${firstName} LOST!`;
    checkWinner();
}

/**
 * This function will run if the game is a draw and display a message.
 */

 function draw(userChoice, computerChoice) {
    const resultDiv = document.querySelector('.result > p');
    resultDiv.innerHTML = `${convertWord(userChoice)} equals ${convertWord(computerChoice)}. Its a DRAW!`;
}

/**
 * This function will check if the user or computer wins the game
 */
function checkWinner() {
    if (winnerCalled()) {
        gameOver();
    }
}

function winnerCalled() {
    return userScore === winningScore || computerScore === winningScore;
}

/**
 * This function displays the winning or losing page
 * and returns to the user the final score
 */
function gameOver() {
    if (userScore > computerScore) {
        gameBoardDiv.innerHTML = `
        <div id="winner-page">
        <h2 id="win-msg">Awesome ${firstName}, You Won!!!</h2>
        <p id="final-score"> ${userScore} : ${computerScore}</p>
        <button id="play-again-btn" class="btn">Play Again</button>
        <button id="game-options-btn" class="btn">Game Options</button>
    </div>`;
    } else {
        gameBoardDiv.innerHTML = `
        <div id="loser-page">
        <h2 id="win-msg">Unlucky ${firstName}, You Lost!!!</h2>
        <p id="final-score"> ${userScore} : ${computerScore}</p>
        <button id="play-again-btn" class="btn">Play Again</button>
        <button id="game-options-btn" class="btn">Game Options</button>
    </div>`;
    }
    document.getElementById('play-again-btn').addEventListener('click', resetGame);
    document.getElementById('game-options-btn').addEventListener('click', gameSetUp);
}


/**
 * This function will reset the game so the user can play a different game with
 * the score back to 0 - 0.
 */
function resetGame() {
    userScore = 0;
    computerScore = 0;
    gameSwitch(winningScore);
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