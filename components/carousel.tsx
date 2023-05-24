"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "/app/globals.css";
import Script from "next/script";
import changeSlides from "../Constants/Carousel_Function/carouselFunction.js";
import leftArrow from "../resources/Shape Elements/left-arrow.webp";
import rightArrow from "../resources/Shape Elements/right-arrow.webp";
import { useEffect } from "react";

const SaliyabCarousel = () => {
  return (
    <div>
      <div className="textimony">
        <a className="left-arrow" onClick={() => changeSlides(-1)}>
          <Image src="" width="107" height="104" alt="left arrow pic" />
        </a>
        <q>
          Saliyab&apos;s workshop was a game-changer for me. The insights and
          practical advice I gained from the experts in the field helped me to
          take my skills to the next level and make a real impact in my work. I
          highly recommend it!
        </q>
        <a className="right-arrow" onClick={() => changeSlides(1)}>
          <Image
            className="right-arrow"
            src={rightArrow}
            width="106"
            height="104"
            alt="right arrow pic"
          />
        </a>
      </div>

      <div className="textimony">
        <a className="left-arrow" onClick={() => changeSlides(-1)}>
          <Image
            src={leftArrow}
            width="107"
            height="104"
            alt="left arrow pic"
          />
        </a>
        <q>
          I&apos;ve attended several workshops in the past, but Saliyab&apos;s
          was by far the most informative and engaging. The speakers were
          knowledgeable and approachable, and I left feeling motivated and
          inspired to pursue new opportunities in the tech industry.
        </q>
        <a className="right-arrow" onClick={() => changeSlides(1)}>
          <Image
            className="right-arrow"
            src={rightArrow}
            width="106"
            height="104"
            alt="right arrow pic"
          />
        </a>
      </div>

      <div className="textimony">
        <a className="left-arrow" onClick={() => changeSlides(-1)}>
          <Image
            src={leftArrow}
            width="107"
            height="104"
            alt="left arrow pic"
          />
        </a>
        <q>
          The Saliyab workshop provided me with a wealth of new information and
          resources that I could immediately apply to my work. I appreciated the
          hands-on approach and the chance to network with other professionals
          in the field.
        </q>
        <a className="right-arrow" onClick={() => changeSlides(1)}>
          <Image
            className="right-arrow"
            src={rightArrow}
            width="106"
            height="104"
            alt="right arrow pic"
          />
        </a>
      </div>

      <div className="textimony">
        <a className="left-arrow" onClick={() => changeSlides(-1)}>
          <Image
            src={leftArrow}
            width="107"
            height="104"
            alt="left arrow pic"
          />
        </a>
        <q>
          As a beginner in the tech industry, I was a bit intimidated to attend
          the Saliyab workshop. But I&apos;m so glad I did! The workshop was
          tailored to all skill levels and I left with a much deeper
          understanding of the field and its possibilities.
        </q>
        <a className="right-arrow" onClick={() => changeSlides(1)}>
          <Image
            className="right-arrow"
            src={rightArrow}
            width="106"
            height="104"
            alt="right arrow pic"
          />
        </a>
      </div>
      <Script src="../Constants/Carousel_Function/carouselFunction.js" />
    </div>
  );
};

export default SaliyabCarousel;
