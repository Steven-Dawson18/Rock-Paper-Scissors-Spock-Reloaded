let firstName = "friend";
const containerDiv = document.getElementsByClassName('container');
const playButton = document.getElementById('submit-name');
const gameBoardDiv = document.getElementById('game-board');
const userInputDiv = document.getElementById('user-input');

let gameOptions = `
<div id="game-options-page">
    <p id="message">Please enter your name above to play game.</p>
    <p id="user-options-message">Please select a game</p>
    <button class="game-button" id="short-game">First to 3</button>
    <button class="game-button" id="medium-game">First to 5</button>
    <button class="game-button" id="long-game">First to 10</button>
    <div id="rules-video">
        <a id="video" href="https://www.youtube.com/watch?v=fqlDc2VICZ0" target="_blank" rel="noopener" aria-label="View video of rules (opens a new tab)">Rules Video</a>
    </div>
    <div id="rules">How to play
        <img class="hide" id="rules-image" src="assets/images/rules.png" alt="rules image">
    </div>
</div>`;

playButton.addEventListener('click', function() {
   let userInputName = document.getElementById('fname').value;
        firstName = userInputName;
        if(!userInputName) {
            document.getElementById('message').innerHTML = ('Please enter your name to play!');
        } else {
            gameBoardDiv.innerHTML = gameOptions; 
            document.getElementById('message').innerHTML = ('Hey ' + firstName + ' are you ready to play? Click on either Rock, Paper, Scissors, Lizard or Spock to play');
            userInputDiv.classList.add('hide');
        }
})

/**
 * This function will store the name. of the user
 */

