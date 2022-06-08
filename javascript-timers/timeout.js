var $message = document.querySelector('.message');
setTimeout(helloThere, 2000);
function helloThere() {
  $message.textContent = 'Hello There';
}
