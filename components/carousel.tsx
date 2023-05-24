"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import carouselmg1 from "../resources/Carousel_Images/DSC07527.webp";
import carouselmg2 from "../resources/Carousel_Images/DSC07557.webp";
import carouselmg3 from "../resources/Carousel_Images/IMG_0488.webp";
import Image from "next/image";
import "/app/globals.css";

const SaliyabCarousel = () => {
  return (
    <div>
      <div className="container-fluid container-sm">
        <div className="row">
          <div className="col-12">
            <Carousel fade>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={carouselmg1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="carousel-quote">
                    Saliyab&apos;s workshop was a game-changer for me. The
                    insights and practical advice I gained from the experts in
                    the field helped me to take my skills to the next level and
                    make a real impact in my work. I highly recommend it!
                  </h3>
                  <p className="carousel-quoter">-Juan Dela Cruz</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={carouselmg2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3 className="carousel-quote">
                    I&apos;ve attended several workshops in the past, but
                    Saliyab&apos;s was by far the most informative and engaging.
                    The speakers were knowledgeable and approachable, and I left
                    feeling motivated and inspired to pursue new opportunities
                    in the tech industry.
                  </h3>
                  <p>
                    <p className="carousel-quoter">-Juanna Dela Cruz</p>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={carouselmg3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 className="carousel-quote">
                    The Saliyab workshop provided me with a wealth of new
                    information and resources that I could immediately apply to
                    my work. I appreciated the hands-on approach and the chance
                    to network with other professionals in the field.
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
};

export default SaliyabCarousel;
