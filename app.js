const qwerty = document.getElementById('qwerty');
const overlay = document.getElementById('overlay');
const phrase = document.getElementById('phrase');
const letters = document.getElementsByClassName('letter');
const resetBtn = document.getElementById('btn__reset');
let phrases = ['under the weather', 'heads up', 'jumping the gun', 'rain on your parade', 'close but no cigar'];
const heart = document.getElementsByTagName('img');
const start = document.querySelector('.btn__reset');
const lettersShown = document.getElementsByClassName('show');
let missed = 0; //if the player guesses wrong 5 times, they lose the game
const title = document.querySelector('h2.title');

//function to reload page and refresh settings to start
function reloadPage(){
  window.location.reload();
}

//Attach a event listener to the “Start Game” button to hide the start screen overlay.
start.addEventListener('click', function() {
  overlay.style.display = ('none');
});


function getRandomPhraseAsArray(arr){
  //do stuff to any arr that is passed in
    let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase;
};


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
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(btn){
  let correct = false;
  for(let i = 0; i < letters.length; i += 1) {
    if(btn.target.textContent === letters[i].textContent){
      letters[i].classList.add('show');
      correct = true;
    }
  }
  return correct;
  }

//check if game is won with correct letters matching those shown.
//check to see if game is lost if missed reaches 5.
//new buttons to allow the game to be reset
function checkWin(){
  if(letters.length === lettersShown.length) {
    overlay.style.display = "flex";
    overlay.className = "win";
    title.textContent = "You Win!"
    start.textContent = "Play Again";
    start.addEventListener("click", function() {
      reloadPage();
    });
  } else {
    if (missed === 5) {
      overlay.style.display = "flex";
      overlay.className = "lose";
      title.textContent = "You Lose!"
      start.textContent = "Try Again";
      start.addEventListener("click", function() {
      reloadPage();
    });
  }
  }
};

//click event listener to select letters and match those shown
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
  checkWin();
 });
