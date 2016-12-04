var more = document.getElementById("more");
var footer = document.getElementById("footer");

more.addEventListener('click', morePressed, false);


function morePressed() {
  footer.scrollIntoView();
}
