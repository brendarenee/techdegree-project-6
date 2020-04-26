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
  const phrase = document.querySelectorAll('.letter');
  let letterFound = null;
  for (let i=0; i<phrase.length; i++) {
    if (btn === phrase[i].textContent.toLowerCase()) {
      phrase[i].className +=  ' show';
      letterFound = phrase[i].textContent;
    }
  }
  return (letterFound);
};

qwerty.addEventListener('click', (e) => {
  if (e.target.tagName = 'BUTTON') {
    const selectedLetter = e.target;
    selectedLetter.className = 'chosen';
    selectedLetter.setAttribute("disabled", "");
    const btnContent = selectedLetter.textContent;

    checkLetter(btnContent);
  }
});
