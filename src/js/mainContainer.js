var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach(function(el) {
  var button = el.querySelector('a[data-toggle="dropdown"]'),
    menu = el.querySelector('.dropdown-menu');

  button.onclick = function(event) {
    if (!menu.hasClass('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      event.preventDefault();
    } else {
      menu.classList.remove('show');
      menu.classList.add('hide');
      event.preventDefault();
    }
  };
})

Element.prototype.hasClass = function(className) {
  return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};
var popupButton = document.getElementById('searchAndPopup');
var popupContainer = document.getElementById('popup');


popupButton.onclick = function(event) {
  event.preventDefault();
  popupContainer.classList.remove('hidepopup');
  popupContainer.classList.add('showpopup');

}
