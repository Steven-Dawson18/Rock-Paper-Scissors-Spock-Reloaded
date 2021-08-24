const containerDiv = document.getElementsByClassName('container');
const playButton = document.getElementById('submit-name');
const gameBoardDiv = document.getElementById('game-board');

let gameOptions = `
<div class="hide" id="game-options-page">
    <p id="user-options-message">Please select a game</p>
    <button class="game-button" id="short-game">First to 3</button>
    <button class="game-button" id="medium-game">First to 5</button>
    <button class="game-button" id="long-game">First to 10</button>
    <div id="rules-video">
        <a id="video" href="https://www.youtube.com/watch?v=fqlDc2VICZ0" target="_blank" rel="noopener" aria-label="View video of rules (opens a new tab)">Rules Video</a>
    </div>
    <div id="rules" class="hide">How to play
        <img class="hide" id="rules-image" src="assets/images/rules.png" alt="rules image">
    </div>
</div>`;

playButton.addEventListener('click', function() {
   gameBoardDiv.innerHTML = gameOptions; 
})

//  const introPara = document.getElementById('intro');
//     introPara.innerHTML = '<p id="user-options-message">Please select a game</p>';
//     const gameButtonOne = document.getElementById('user-input');
    
//     gameButtonOne.innerHTML = '<button class="game-button" id="short-game">First to 3</button>';
//     const gameButtonTwo = document.getElementById('game-two');

//     gameButtonTwo.innerHTML = '<button class="game-button" id="medium-game">First to 5</button>';
//     const gameButtonThree = document.getElementById('game-three');

//     gameButtonThree.innerHTML = '<button class="game-button" id="long-game">First to 10</button>';