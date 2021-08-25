let firstName = "friend";
const containerDiv = document.getElementsByClassName('container');
const playButton = document.getElementById('submit-name');
const gameBoardDiv = document.getElementById('game-board');
const userInputDiv = document.getElementById('user-input');
const rules = document.getElementById('rules');
const rulesImage = document.getElementById('rules-image');
const shortGameButton = document.getElementById('short-game');

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
        }
})
}


userInput();


/** 
 * This functions will show and hide the game rules and how to play. 
 */

 function showRules() {
    rules.addEventListener('click', function() {
    rulesImage.classList.toggle('hide');
    });
}

showRules();

/**
 * This function will show the short game when the button is clicked
 */

 function shortGameSwitch() {
    shortGameButton.addEventListener('click', function() {
        gameBoardDiv.innerHTML = shortGame;
        console.log('Im clicked');
    })
}

shortGameSwitch();