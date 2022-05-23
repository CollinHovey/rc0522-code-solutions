function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target', event.target);
}

var $click = document.querySelector('button.click-button');
$click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target', event.target);
}

var $hover = document.querySelector('button.hover-button');
$hover.addEventListener('mouseover', handleMouseover);

function handleDoubleCLick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target', event.target);
}

var $doubleClick = document.querySelector('button.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleCLick);
