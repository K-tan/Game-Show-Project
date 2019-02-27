const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0; //if the player guesses wrong 5 times, they lose the game

const overlay = document.getElementById('overlay');
const resetBtn = document.getElementById('btn__reset');

document.addEventListener('click', function() {
  overlay.style.display = 'none';
});
