const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const buttonReset = document.querySelector('.btn__reset');
let missed = 0;

buttonReset.addEventListener('click',
  (e) => {overlay.style.display = 'none';});

const phrases = [
  'A return to the basics',
  'My patience is growing thin',
  'Quality time',
  'Buying in bulk',
  'Go with the flow',
  'Going bananas',
  'One for the books'
];


// Selects a random phrase and parses out each letter to a separate array.

const getRandomPhraseAsArray = arr => {
  const randNum = Math.floor((Math.random() * arr.length));
  const randPhrase = arr[randNum];
  const phraseParsed = [];
  for (let i=0; i<randPhrase.length; i++) {
    phraseParsed.push(randPhrase[i]);
  }
  return phraseParsed;
};


// Adds the random phrase to the Game Board

const addPhraseToDisplay = arr => {
  for (let i=0; i<arr.length; i++) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    let liRe = new RegExp('[a-zA-Z]');
    if (liRe.test(li.textContent)) {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }
    phrase.firstElementChild.appendChild(li);
  }
};

addPhraseToDisplay ( getRandomPhraseAsArray(phrases) );

// Checks the button clicked against each letter in the phrase letters array
const checkLetter = btn => {
  const phrase = document.querySelectorAll('.letter');
  let phraseLetter = null;
  for (let i=0; i<phrase.length; i++) {
    if (btn === phrase[i].textContent.toLowerCase()) {
      phrase[i].className +=  ' show';
      phraseLetter = phrase[i].textContent;
    }
  }
  return phraseLetter;
};

function checkWin() {
  const phraseLetters = document.querySelectorAll('.letter');
  const guessedLetters = document.querySelectorAll('.show');
// Checks if all phrase letters are 'showing' and shows the WIN screen
  if (phraseLetters.length === guessedLetters.length){
    overlay.className += ' win';
    overlay.style.display = 'flex';
    overlay.firstElementChild.textContent = 'You guessed the phrase!';
    buttonReset.textContent = 'Play Again';
// Checks if user has 5 incorrect guesses and shows the LOSE screen
  } else if (missed > 4) {
    overlay.className += ' lose';
    overlay.style.display = 'flex';
    overlay.firstElementChild.textContent = 'You are out of guesses. Try again!';
    buttonReset.textContent = 'Play Again';
  }
};

function restartGame() {
    const qwertyButtons = document.querySelectorAll('.chosen');
    const scoreBoard = document.querySelectorAll('.tries');
// Reset phrase section
    phrase.firstElementChild.textContent = '';
    addPhraseToDisplay ( getRandomPhraseAsArray(phrases) );
// Reset qwerty keyboard
    for (i=0; i<qwertyButtons.length; i++) {
      qwertyButtons[i].removeAttribute('disabled');
      qwertyButtons[i].className = '';
    };
// Reset scoreboard
    missed = 0;
    for (i=0; i<scoreBoard.length; i++) {
      scoreBoard[i].innerHTML = '<img src="images/liveHeart.png" width="30px" height="35px">';
    };

}

// Keyboard button event listener.
qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    // Update keyboard to show 'chosen' letters
    const selectedButton = e.target;
    selectedButton.className = 'chosen';
    selectedButton.setAttribute("disabled", "");
    const selectedLetter = selectedButton.textContent;
    // Checks if button clicked matches phrase.
    // Letter revealed in phrase or NULL is returned.
    const letterFound = (checkLetter(selectedLetter));
    // Update scoreboard when NULL is returned
    if (!letterFound) {
      missed += 1;
      let heartCounter = document.querySelectorAll('.tries');
      heartCounter[heartCounter.length - missed].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px">';
    }
    // Check for win/loss after each button click.
    checkWin();
  }
});

// Event listener for WIN/LOSE screen to reset game.
buttonReset.addEventListener('click', (e) => {
  if (e.target.textContent === 'Play Again') {
    restartGame();
    overlay.style.display = 'none';
  }
  });




// qwerty.addEventListener('click', (e) => {
//   if (e.target.tagName === 'BUTTON') {
