function handleFocus(event) {
  console.log('Focus Event Fired');
  console.log('At:', event.target.name);
}

function handleBlur(event) {
  console.log('Blur Event Fired');
  console.log('At:', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var $nameForm = document.getElementById('user-name');
var $emailForm = document.getElementById('user-email');
var $messageForm = document.getElementById('user-message');

$nameForm.addEventListener('focus', handleFocus);
$nameForm.addEventListener('blur', handleBlur);
$nameForm.addEventListener('input', handleInput);

$emailForm.addEventListener('focus', handleFocus);
$emailForm.addEventListener('blur', handleBlur);
$emailForm.addEventListener('input', handleInput);

$messageForm.addEventListener('focus', handleFocus);
$messageForm.addEventListener('blur', handleBlur);
$messageForm.addEventListener('input', handleInput);
