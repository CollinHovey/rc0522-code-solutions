var $correct = document.querySelector('span.correct');
var $currentLetter = document.querySelector('span.current-letter');
var $rest = document.querySelector('span.rest');

window.addEventListener('keypress', whatKey);

function whatKey(e) {
  if (e.key === $currentLetter.textContent) {
    $correct.textContent = $correct.textContent + e.key;
    $currentLetter.textContent = $rest.textContent[0];
    $rest.textContent = $rest.textContent.slice(1, $rest.textContent.length);
    $currentLetter.className = 'current-letter';
  } else {
    $currentLetter.className = 'current-letter-wrong';
  }
}
