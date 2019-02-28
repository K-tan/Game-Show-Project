const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0; //if the player guesses wrong 5 times, they lose the game
const overlay = document.getElementById('overlay');
const resetBtn = document.getElementById('btn__reset');
const phrases = ['under the weather', 'heads up', 'jumping the gun', 'rain on your parade', 'close but no cigar'];
const phraseArray = getRandomPhraseAsArray(phrases);
const letters = document.getElementsByClassName('letter');
const heart = document.getElementsByTagName('img');
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
    for(let i = 0; i < arr.length; i += 1) { //loop through the given array.
      let ul = document.getElementsByTagName('ul')[0]; //locates the ul from html
      let li = document.createElement('li'); //creates a new li
      li.textContent = arr[i]; //places the random arr character to the text content
      ul.appendChild(li); //creates a new li under the ul
      if (arr[i] != ' ') { //checks to see if the li has a letter or space and reaches out to the CSS Class.
            li.className = "letter";
        } else {
            li.className = "space";
        }
    }
}

addPhraseToDisplay(phraseArray);

function checkLetter(btn){
  let correct = false;
  for(let i = 0; i < letters.length; i += 1) {
    if(btn.target.textContent === letters[i].textContent){
      letters[i].classList.add("show");
      correct = true;
    }
  }
  return correct;
  }

qwerty.addEventListener('click', (e) => {
    const letterFound = checkLetter(e);
  if (e.target.tagName === 'BUTTON') {
      e.target.className = "chosen";
      e.target.disabled = 'true';
      if (letterFound === false && missed < 5) {
 			heart[missed].setAttribute('src', 'images/lostHeart.png');
 			missed++;

 		}
 	}

 });
