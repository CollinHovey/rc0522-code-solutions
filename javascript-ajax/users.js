var $list = document.querySelector('#user-list');
function retrieveUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (var x = 0; x < xhr.response.length; x++) {
      var $newName = document.createElement('li');
      $newName.textContent = xhr.response[x].name;
      $list.appendChild($newName);
    }
  });
  xhr.send();
}

retrieveUsers();
