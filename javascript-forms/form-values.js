var $contactForm = document.getElementById('contact-form');

function submit(event) {
  event.preventDefault();
  var userInfo = {};
  userInfo.name = document.forms[0].elements.name.value;
  userInfo.email = document.forms[0].elements.email.value;
  userInfo.message = document.forms[0].elements.message.value;
  console.log(userInfo);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', submit);
