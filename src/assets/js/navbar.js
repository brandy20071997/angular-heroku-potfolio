// AOS.init();

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navanimation").style.top = "0";
   
  } else {
    document.getElementById("navanimation").style.top = "-100px";
   
  }
  prevScrollpos = currentScrollPos;
}
