
buttonReset.addEventListener('click',(e) => {
  if (e.target.textContent === 'Restart Game') {
    overlay.style.display = 'none';
    phrase.firstElementChild.textContent = '';
    keyrowSelectedButtons.style.className = '';
    keyrowSelectedButtons.removeAttribute('disabled');
    addPhraseToDisplay ( getRandomPhraseAsArray(phrases) );
  }
});
