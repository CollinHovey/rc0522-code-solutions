var $open = document.querySelector('button.open');
var $body = document.querySelector('body');
var $shadow = document.createElement('div');
$shadow.className = 'shadow';

var $container = document.createElement('div');
$container.className = 'container';

var $head = document.createElement('h1');
var $header = document.createTextNode('Would you like to take a survey?');
$head.appendChild($header);

var $close = document.createElement('button');
var $no = document.createTextNode('NO');
$close.className = 'close';
$close.appendChild($no);

function add(event) {
  $body.appendChild($shadow);
  $body.appendChild($container);
  $container.appendChild($head);
  $container.appendChild($close);
}
function remove(event) {
  $body.removeChild($shadow);
  $body.removeChild($container);
}

$open.addEventListener('click', add);
$close.addEventListener('click', remove);
