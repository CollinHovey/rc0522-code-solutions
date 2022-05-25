var $correct = document.querySelector('span.correct');
var $currentLetter = document.querySelector('span.current-letter');
var $rest = document.querySelector('span.rest');
var $div = document.querySelector('div');
var correctCounter = 0;
var totalCounter = 0;

window.addEventListener('keypress', whatKey);

function whatKey(e) {
  if (e.key === $currentLetter.textContent) {
    $correct.textContent = $correct.textContent + e.key;
    $currentLetter.textContent = $rest.textContent[0];
    $rest.textContent = $rest.textContent.slice(1, $rest.textContent.length);
    $currentLetter.className = 'current-letter';
    correctCounter += 1;
    totalCounter += 1;
  } else {
    $currentLetter.className = 'current-letter-wrong';
    totalCounter += 1;
  }
  if ($currentLetter.textContent === '') {
    var finalStat = (correctCounter / totalCounter) * 100;
    var $stats = document.createElement('h2');
    $stats.textContent = 'You scored ' + finalStat + '%';
    $div.append($stats);
    var $playAgain = document.createElement('button');
    $playAgain.textContent = 'PLAY AGAIN?';
    window.removeEventListener('keypress', whatKey);
    $div.append($playAgain);
  }
}
