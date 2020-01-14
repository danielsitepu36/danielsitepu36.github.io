var i = 0;
var txt = 'Welcome, my name is Daniel Suranta Sitepu';
var speed = 50;

var d = document.getElementById("overlayBigScreen");

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function overlayOn() {
  document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
  this.typeWriter();
}