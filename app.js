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

function getRandomPhraseAsArray(arr) {
  const randNum = Math.floor((Math.random() * arr.length) + 1);
  const randomPhrase = arr[randNum];
  const phraseParsed = [];
  () => {
    for (let i=0; i<randomPhrase.length; i++) {
      phraseParsed.push(randomPhrase[i]);
    }
   }
  return phraseParsed;
}
console.log(getRandomPhraseAsArray(phrases));
