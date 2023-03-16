var slideIndex = 0;
showSlides(slideIndex);

function changeSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("textimony");
  
  if(n > slides.length-1) {slideIndex = 1}
  if (n < 0) {slideIndex = slides.length-1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
  slides[slideIndex].style.display = "flex";
} 