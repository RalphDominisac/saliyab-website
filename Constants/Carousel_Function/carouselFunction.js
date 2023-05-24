import { useState, useEffect } from "react";

const CarouselFunction = (n) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    showSlides(index);

    function changeSlides(n) {
      showSlides((slideIndex += n));
    }
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("textimony");
      n > slides.length - 1
        ? (slideIndex = 1)
        : n < 0
        ? (slideIndex = slides.length - 1)
        : null;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex].style.display = "flex";
    }
  });
  return { index };
};

export default CarouselFunction;

// import { useEffect } from "react";
// let slideIndex = 0;
// showSlides(slideIndex);

// export function changeSlides(n) {
//   showSlides((slideIndex += n));
// }

// export function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("textimony");

//   n > slides.length - 1
//     ? (slideIndex = 1)
//     : n < 0
//     ? (slideIndex = slides.length - 1)
//     : null;

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex].style.display = "flex";
// }
