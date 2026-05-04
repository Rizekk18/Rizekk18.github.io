// autor: Michal Řezníček

var nav = document.querySelector('.main-nav');
var toggle = document.querySelector('.nav-toggle');
var label = document.querySelector('.nav-toggle-label');

// Hamburger menu for mobile nav
toggle.addEventListener('click', function () {
  var isOpen = nav.classList.toggle('is-open');
  if (isOpen) {
    label.textContent = 'CLOSE';
  } else {
    label.textContent = 'MENU';
  }
});

// Close menu after clicking a link
var links = nav.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    nav.classList.remove('is-open');
    label.textContent = 'MENU';
  });
}