function change(color) { 
  var box = document.getElementById("box-cont");
  box.style.borderColor = color;
  box.classList.remove("falling-animation");
  setTimeout(function() {
    box.classList.add("falling-animation");
  }, 100);
}     