var $countdown = document.querySelector('.countdown-display');
var intervalNumber = setInterval(countdown, 1000);
function countdown() {
  $countdown.textContent -= 1;
  if ($countdown.textContent === '0') {
    clearInterval(intervalNumber);
    $countdown.textContent = '~Eath Beeeelooowww Us~';
  }
}
