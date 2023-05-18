"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import carousel_img_1 from "../resources/Carousel Images/DSC07527.webp";
import carousel_img_2 from "../resources/Carousel Images/DSC07557.webp";
import carousel_img_3 from "../resources/Carousel Images/IMG_0488.webp";
import Image from "next/image";
import "/app/globals.css";
class BootstrapCarouselComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid container-sm">
          <div className="row">
            <div className="col-12">
              <Carousel fade>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={carousel_img_1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 className="carousel-quote">
                      Saliyab&apos;s workshop was a game-changer for me. The
                      insights and practical advice I gained from the experts in
                      the field helped me to take my skills to the next level
                      and make a real impact in my work. I highly recommend it!
                    </h3>
                    <p className="carousel-quoter">-Juan Dela Cruz</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={carousel_img_2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className="carousel-quote">
                      I&apos;ve attended several workshops in the past, but
                      Saliyab&apos;s was by far the most informative and
                      engaging. The speakers were knowledgeable and
                      approachable, and I left feeling motivated and inspired to
                      pursue new opportunities in the tech industry.
                    </h3>
                    <p>
                      <p className="carousel-quoter">-Juanna Dela Cruz</p>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={carousel_img_3}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3 className="carousel-quote">
                      The Saliyab workshop provided me with a wealth of new
                      information and resources that I could immediately apply
                      to my work. I appreciated the hands-on approach and the
                      chance to network with other professionals in the field.
                    </h3>
                    <p className="carousel-quoter">-Juanito Dela Cruz</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BootstrapCarouselComponent;
// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Carousel from "react-bootstrap/Carousel";
// import carousel_img_1 from "../resources/Carousel Images/DSC07527.webp";
// import carousel_img_2 from "../resources/Carousel Images/DSC07557.webp";
// import carousel_img_3 from "../resources/Carousel Images/Untitled1.webp";
// import Image from "next/image";

// export default function carousel() {
//   return (
//     <div style={{ display: "block", width: 700, padding: 30 }}>
//       <h4>React-Bootstrap Carousel Component</h4>
//       <Carousel fade>
//         <Carousel.Item interval={2500}>
//           <Image
//             className="d-block w-100"
//             src={carousel_img_1}
//             alt="Image One"
//           />
//           <Carousel.Caption>
//             {/* <h3>Label for first slide</h3> */}
//             <q>
//               Saliyab&quot;s workshop was a game-changer for me. The insights
//               and practical advice I gained from the experts in the field helped
//               me to take my skills to the next level and make a real impact in
//               my work. I highly recommend it!
//             </q>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={2500}>
//           <Image
//             className="d-block w-100"
//             src={carousel_img_2}
//             alt="Image Two"
//           />
//           <Carousel.Caption>
//             <h3>Label for second slide</h3>
//             <p>Sample Text for Image Two</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={2500}>
//           <Image
//             className="d-block w-100"
//             src={carousel_img_3}
//             alt="Image Two"
//           />
//           <Carousel.Caption>
//             <h3>Label for second slide</h3>
//             <p>Sample Text for Image Two</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// --------end of working atm-----------------
// "use client";

// import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

// function Carousel() {
//   const slides = [
//     {
//       url: "./resources/Carousel Images/DSC07527.webp",
//     },
//     {
//       url: "./resources/Carousel Images/DSC07557.webp",
//     },
//     {
//       url: "./resources/Carousel Images/IMG_0447.webp",
//     },

//     {
//       url: "./resources/Carousel Images/IMG_0488.webp",
//     },
//     {
//       url: "./resources/Carousel Images/Saliyab.webp",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex: any) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div classNameName="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         classNameName="w-full h-full rounded-2xl bg-center bg-cover duration-500"
//       ></div>
//       {/* Left Arrow */}
//       <div classNameName="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div classNameName="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div classNameName="flex top-4 justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             classNameName="text-2xl cursor-pointer"
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;

// -------------------------

// ------------------------------
// "use client";

// import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

// function Carousel() {
//   const slides = [
//     {
//       url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
//     },

//     {
//       url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex: any) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div classNameName="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         classNameName="w-full h-full rounded-2xl bg-center bg-cover duration-500"
//       ></div>
//       {/* Left Arrow */}
//       <div classNameName="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div classNameName="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div classNameName="flex top-4 justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             classNameName="text-2xl cursor-pointer"
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;
