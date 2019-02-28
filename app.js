const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0; //if the player guesses wrong 5 times, they lose the game
const overlay = document.getElementById('overlay');
const resetBtn = document.getElementById('btn__reset');

const phrases = ['under the weather', 'heads up', 'jumping the gun', 'rain on your parade', 'close but no cigar'];
const phraseArray = getRandomPhraseAsArray(phrases);
//Attach a event listener to the “Start Game” button to hide the start screen overlay.
document.addEventListener('click', function() {
  overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr){
  //do stuff to any arr that is passed in
    let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase;
}
getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for(let i = 0; i < arr.length; i += 1) {
      let ul = document.getElementsByTagName('ul')[0];
      let li = document.createElement('li');
      li.textContent = arr[i];
      ul.appendChild(li);
      if (arr[i] != ' ') {
            li.className = "letter";
        } else {
            li.className = "space";
        }
    }
}

addPhraseToDisplay(phraseArray);
