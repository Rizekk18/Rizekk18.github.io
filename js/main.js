var nav = document.querySelector('.main-nav');
var toggle = document.querySelector('.nav-toggle');
var label = document.querySelector('.nav-toggle-label');

function setOpen(open) {
  nav.classList.toggle('is-open', open);
  if (open) {
    label.textContent = 'CLOSE';
  } else {
    label.textContent = 'MENU';
  }
}

function handleToggleClick() {
  var isOpen = nav.classList.contains('is-open');
  setOpen(!isOpen);
}

function handleLinkClick() {
  setOpen(false);
}

toggle.addEventListener('click', handleToggleClick);

var links = nav.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', handleLinkClick);
}
