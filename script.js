



// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// Slideshow





// animal moving
function init(){
    imgObj = document.getElementById('animal');
    imgObj.style.position= 'relative'; 
}

var id = null;
function myMove() {
  var elem = document.getElementById("animal");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 1400) {
      clearInterval(id);
    } else {
      pos++;
      //elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

window.onload =init;
// animal moving




/* This code is for repetition*/
$(function(){
    $('.repeat').click(function(){
        var classes =  $(this).parent().attr('class');
          $(this).parent().attr('class', 'animate');
          var indicator = $(this);
          setTimeout(function(){ 
            $(indicator).parent().addClass(classes);
          }, 20);
      });
  });