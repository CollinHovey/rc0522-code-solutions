var $container = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$container.addEventListener('click', changeTab);

function changeTab(event) {
  if (event.target.matches('.tab')) {
    for (var x = 0; x < $tabs.length; x++) {
      if (event.target.textContent === $tabs[x].textContent) {
        event.target.className = 'tab active';
      } else {
        $tabs[x].className = 'tab';
      }
    }
    event.target.getAttribute('data-view');
    for (var y = 0; y < $tabs.length; y++) {
      if (event.target.getAttribute('data-view') === $views[y].getAttribute('data-view')) {
        $views[y].className = 'view';
      } else {
        $views[y].className = 'view hidden';
      }
    }
  }
}
