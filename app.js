const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const buttonReset = document.querySelector('.btn__reset');
let missed = 0;

buttonReset.addEventListener('click',
  (e) => {overlay.style.display = 'none';});

const phrases = [
  'All dressed up and nowhere to go',
  'My patience is growing thin',
  'Quality time',
  'Some day we will have a good laugh about this',
  'Go with the flow',
  'Going bananas',
  'It is five oclock somewhere'
];


// Selects a random phrase and parse out each letter to a separate array.

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

const checkLetter = btn => {
  const letters = document.querySelectorAll('.letter');
  let matchedLetter = null;
  for (let i=0; i<letters.length; i++) {
    if (btn === letters[i].textContent.toLowerCase()) {
      letters[i].className +=  ' show';
    }
  }
};

qwerty.addEventListener('click', (e) => {
  const btn = e.target;
  const btnContent = btn.textContent;
  btn.className = 'chosen';
  btn.setAttribute("disabled", "");

  checkLetter(btnContent);
});
