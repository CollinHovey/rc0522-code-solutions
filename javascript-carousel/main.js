var $goBack = document.querySelector('i.go-back');
var $goForward = document.querySelector('i.go-forward');
var $select1 = document.querySelector('i.selection-1');
var $select2 = document.querySelector('i.selection-2');
var $select3 = document.querySelector('i.selection-3');
var $select4 = document.querySelector('i.selection-4');
var $select5 = document.querySelector('i.selection-5');
var $allSelects = document.querySelectorAll('.fa-circle');

var counter = 1;

var stopRotate = setInterval(rotate, 3000);
function rotate() {
  counter += 1;
  if (counter === 6) {
    counter = 1;
  }
  var $activeSelectBubble = document.querySelector('i.selection-' + counter);
  $activeSelectBubble.setAttribute('class', 'fa-solid fa-circle place-icon fa-2x selection-' + counter);
  if (counter === 1) {
    var $previousSelectBubble = document.querySelector('i.selection-5');
    $previousSelectBubble.setAttribute('class', 'fa-regular fa-circle place-icon fa-2x selection-5');
  } else {
    $previousSelectBubble = document.querySelector('i.selection-' + (counter - 1));
    $previousSelectBubble.setAttribute('class', 'fa-regular fa-circle place-icon fa-2x selection-' + (counter - 1));
  }
  var $activePicture = document.querySelector('div.selection-' + counter);
  $activePicture.setAttribute('class', 'column-two-thirds selection-' + counter);
  if (counter === 1) {
    var $previousPicture = document.querySelector('div.selection-5');
    $previousPicture.setAttribute('class', 'column-two-thirds selection-5 hidden');
  } else {
    $previousPicture = document.querySelector('div.selection-' + (counter - 1));
    $previousPicture.setAttribute('class', 'column-two-thirds hidden selection-' + (counter - 1));
  }
}

function goBack() {
  clearInterval(stopRotate);
  counter -= 1;
  if (counter === 0) {
    counter = 5;
  }
  var $activeSelectBubble = document.querySelector('i.selection-' + counter);
  $activeSelectBubble.setAttribute('class', 'fa-solid fa-circle place-icon fa-2x selection-' + counter);
  if (counter === 5) {
    var $previousSelectBubble = document.querySelector('i.selection-1');
    $previousSelectBubble.setAttribute('class', 'fa-regular fa-circle place-icon fa-2x selection-1');
  } else {
    $previousSelectBubble = document.querySelector('i.selection-' + (counter + 1));
    $previousSelectBubble.setAttribute('class', 'fa-regular fa-circle place-icon fa-2x selection-' + (counter + 1));
  }
  var $activePicture = document.querySelector('div.selection-' + counter);
  $activePicture.setAttribute('class', 'column-two-thirds selection-' + counter);
  if (counter === 5) {
    var $previousPicture = document.querySelector('div.selection-1');
    $previousPicture.setAttribute('class', 'column-two-thirds selection-1 hidden');
  } else {
    $previousPicture = document.querySelector('div.selection-' + (counter + 1));
    $previousPicture.setAttribute('class', 'column-two-thirds hidden selection-' + (counter + 1));
  }
  stopRotate = setInterval(rotate, 3000);
}

$goBack.addEventListener('click', goBack);

function goForward() {
  clearInterval(stopRotate);
  counter += 1;
  if (counter === 6) {
    counter = 1;
  }
  var $activeSelectBubble = document.querySelector('i.selection-' + counter);
  $activeSelectBubble.setAttribute('class', 'fa-solid fa-circle place-icon fa-2x selection-' + counter);
  if (counter === 1) {
    var $previousSelectBubble = document.querySelector('i.selection-5');
    $previousSelectBubble.setAttribute('class', 'fa-regular fa-circle place-icon fa-2x selection-5');
  } else {
    $previousSelectBubble = document.querySelector('i.selection-' + (counter - 1));
    $previousSelectBubble.setAttribute('class', 'fa-regular fa-circle place-icon fa-2x selection-' + (counter - 1));
  }
  var $activePicture = document.querySelector('div.selection-' + counter);
  $activePicture.setAttribute('class', 'column-two-thirds selection-' + counter);
  if (counter === 1) {
    var $previousPicture = document.querySelector('div.selection-5');
    $previousPicture.setAttribute('class', 'column-two-thirds selection-5 hidden');
  } else {
    $previousPicture = document.querySelector('div.selection-' + (counter - 1));
    $previousPicture.setAttribute('class', 'column-two-thirds hidden selection-' + (counter - 1));
  }
  stopRotate = setInterval(rotate, 3000);
}

$goForward.addEventListener('click', goForward);

function goDestination(event) {
  clearInterval(stopRotate);
  var previousCount = counter;
  for (var x in $allSelects) {
    if ($allSelects[x] === event.target) {
      var $activeSelectBubble = event.target;
      counter = parseInt(x) + 1;
      break;
    }
  }
  $activeSelectBubble.setAttribute('class', 'fa-solid fa-circle place-icon fa-2x selection-' + counter);
  var $previousSelectBubble = document.querySelector('i.selection-' + (previousCount));
  $previousSelectBubble.setAttribute('class', 'fa-regular fa-circle place-icon fa-2x selection-' + (previousCount));
  var $activePicture = document.querySelector('div.selection-' + counter);
  $activePicture.setAttribute('class', 'column-two-thirds selection-' + counter);
  var $previousPicture = document.querySelector('div.selection-' + (previousCount));
  $previousPicture.setAttribute('class', 'column-two-thirds hidden selection-' + (previousCount));
  stopRotate = setInterval(rotate, 3000);
}

$select1.addEventListener('click', goDestination);
$select2.addEventListener('click', goDestination);
$select3.addEventListener('click', goDestination);
$select4.addEventListener('click', goDestination);
$select5.addEventListener('click', goDestination);
