autosize()

function autosize() {
  var r = window.innerWidth / document.body.clientWidth;
  document.body.style.transform = "scale(" + r + ")";
  document.body.style.transformOrigin = "0% 0%";
}
window.onresize = function() {
  autosize()
}
