var clickTag = "https://level.travel";

var r, i, res, wsS, wsW;
var pY = 169, pYm = 169, ipY;
var w = false, f = false;
var transition = 0.05;

document.addEventListener("DOMContentLoaded", function() {
  r = document.getElementById('r');
  i = document.getElementById('i');
  res = document.getElementById('res');
  wsS = document.getElementById('wsS');
  wsW = document.getElementById('wsW');

  r.addEventListener("mousedown", function(e){
    w = true;
    pY = e.clientY;
    i.classList.add("act");
    if (!f) {anim();}
  });
  r.addEventListener("touchstart", function(e){
    w = true;
    pY = e.touches[0].clientY;
    i.classList.add("act");
    if (!f) {anim();}
  });
  r.addEventListener("mousemove", function(e){
    if (w) {pY = e.clientY;}
  });
  r.addEventListener("touchmove", function(e){
    if (w) {pY = e.touches[0].clientY;}
  });
  r.addEventListener("mouseup", function(e){
    w = false;
    pY = 169;
    i.classList.remove("act");
  });
  r.addEventListener("touchend", function(e){
    if (e.touches.length < 1) {
      w = false;
      pY = 169;
      i.classList.remove("act");
    }
  });
});

function anim () {
  pYm += (pY - pYm)*transition;
  ipY = (pYm / 325);
  if (ipY > 0.73) {
    if (!f) {
      res.classList.add("view");
      wsS.style.display = "none";
    }
    f = true;
  } else if (ipY < 0.315) {
    if (!f) {
      res.classList.add("view");
      wsW.style.display = "none";
    }
    f = true;
  }
  i.style.top = (( 0.37*Math.atan(8*ipY-4)+0.5 )*100)+"%";
  if (!f && (w || (!w && Math.round(pYm) != 169))) {requestAnimationFrame(anim);}
}