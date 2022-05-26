var $body = document.querySelector('body');
var $button = document.querySelector('button');
addEventListener('click', function () {
  if ($body.className === 'on') {
    $body.className = 'off';
    $button.className = 'off';
  } else {
    $body.className = 'on';
    $button.className = 'on';
  }
});
