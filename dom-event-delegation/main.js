var $taskList = document.querySelector('ul.task-list');

function identify(event) {
  console.log('event.target;', event.target);
  console.log('event.target.tagName', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log('closest .task-list-item:', event.target.closest('li.task-list-item'));
    event.target.closest('li.task-list-item').remove();
  }
}

$taskList.addEventListener('click', identify);
