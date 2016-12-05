var more = document.getElementById("more");
var top = document.getElementById("top");

var footer = document.getElementById("footer");
var landing = document.getElementById("landing");

more.addEventListener('click', morePressed, true);
top.addEventListener('click', topPressed, true);


function morePressed() {
  footer.scrollIntoView(false);

}

function topPressed() {
  landing.scrollIntoView(false);

}


$(window).scroll(function () {
    setBackgroundPosition();
})
$(window).resize(function() {
    setBackgroundPosition();
});
function setBackgroundPosition(){
    $(".image").css('background-position', "-0"+ -(Math.max(document.body.scrollTop, document.documentElement.scrollTop) / 4) + "px");
}
