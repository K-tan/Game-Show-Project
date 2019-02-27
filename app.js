const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0; //if the player guesses wrong 5 times, they lose the game

const overlay = document.getElementById('overlay');
const resetBtn = document.getElementById('btn__reset');

const phrases = ['under the weather', 'heads up', 'jumping the gun', 'rain on your parade', 'close but no cigar'];

//Attach a event listener to the “Start Game” button to hide the start screen overlay.
document.addEventListener('click', function() {
  overlay.style.display = 'none';
});

function getRandomAsPhraseArray(arr){
  //do stuff to any arr that is passed in
    let randomPhrase = phrases[Math.floor(Math.random() * 5)];
    return randomPhrase;
}
