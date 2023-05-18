"use client";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import ourJourney from "../resources/Carousel Images/Untitled1.webp";
import whatIsSaliyab from "../resources/Carousel Images/Saliyab.webp";
import testimoniesVector from "../resources/Illustrations/vector3.webp";
import wantToExperience from "../resources/Illustrations/vector5.webp";
import faqVector from "../resources/Illustrations/vector4.2.webp";
import oShape from "../resources/Shape Elements/o.webp";
import yShape from "../resources/Shape Elements/y.webp";
import bShape from "../resources/Shape Elements/b.webp";
import gShape from "../resources/Shape Elements/g.webp";
import y2Shape from "../resources/Shape Elements/y2.webp";
import vShape from "../resources/Shape Elements/v.webp";
import mugnaLogo from "../resources/Logo/mugna_logo.webp";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Accordion from "../components/accordion";
import ContactFormSpree from "../components/contactForm";
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="landing" id="landingpage">
        <div className="textHeader">
          <span className="lightblue">S</span>
          <span className="green">A</span>
          <span className="yellow">L</span>
          <span className="violet">I</span>
          <span className="blue">Y</span>
          <span className="orange">A</span>
          <span className="lightblue">B</span>
        </div>
        <h6 className="saliyab-title-caption">
          The premier platform for sharing knowledge and sparking ideas in the
          field of Technology.
        </h6>
        {/* <button className="sendMessage">Send Message</button> */}
        <Button
          href="#sendMessage"
          variant="outlined"
          sx={{
            margin: "10px 0 300px 0",
            color: "white",
            borderRadius: "15px",
            borderColor: "white",
            ":hover": {
              bgcolor: "rgba(25, 25, 25, 0.8)", // theme.palette.primary.main
              color: "white",
              borderColor: "white",
            },
          }}
        >
          Send Message
        </Button>
      </div>

      <div className="journey">
        <Image src={ourJourney} width="1150" height="864" alt="pic" />
        <div className="journey-text-block text-block">
          <h2>
            <b>Our Journey</b>
          </h2>
          <p>
            We began as an internal learning session within Mugna Technologies,
            where each member of the team had the opportunity to share their
            knowledge and expertise with their colleagues. As we continued to
            learn and grow together, we realized the potential for Saliyab to
            become a valuable resource for the wider tech community.
          </p>
        </div>
      </div>
      <div className="slant-buffer"></div>
      <div className="what-is-saliyab">
        <div className="carousel-text">
          <Image
            className="saliyab-carousel"
            src={whatIsSaliyab}
            width="1193"
            height="1296"
            alt="saliyab pic"
          />
          <div className="saliyab-text-block text-block">
            <h2>What is Saliyab?</h2>
            <p>
              &quot;Saliyab&quot; is a Bisaya word which translates in English
              as Scatter, Spread. Saliyab is a knowledge-sharing platform and
              workshop series that focuses on technology and innovation. It was
              founded as an internal learning session within Mugna Technologies
              and now open to the wider tech community. In 2022, Mugna opened
              Saliyab to the public. Our goal is to provide a space for
              technical and creative discussion, where people from all
              backgrounds and skill levels can come together to learn and share
              their knowledge.
            </p>
          </div>
        </div>
        <div className="testimonials">
          <h2>Testimonies</h2>

          <Carousel />

          <Image
            className="v-3"
            src={testimoniesVector}
            width="4074"
            height="4317"
            alt="pic"
            style={{
              top: -25,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </div>
      </div>
      <div className="contact">
        <Image
          className="v-5"
          src={wantToExperience}
          width="2006"
          height="2916"
          alt="pic"
          id="sendMessage"
        />
        <div className="right-contact">
          <h2>
            <b>Want to experience SALIYAB?</b>
          </h2>
          <h5>
            <b> Send us a message using the form or email us at </b>
            <span className="lb-t">
              <b>hello@mugna.tech</b>
            </span>
          </h5>
          <ContactFormSpree />
        </div>
      </div>
      <div className="faq" id="faqsection">
        <div className="faq-bg"></div>
        <div className="faq-content">
          <h4>
            <b>FAQs</b>
          </h4>
          <h2>
            <b>Frequently Asked Questions</b>
          </h2>
          <div className="faq-search">
            <p>Have questions? We&apos;re here to help.</p>

            <Accordion />
          </div>
          <Image
            className="v-4-2"
            src={faqVector}
            width="4074"
            height="4317"
            alt="pic"
          />

          <div className="faq-end">
            <h4>
              <b>Still have questions?</b>
            </h4>
            <h6>
              Can&apos;t find the answer you&apos;re looking for? Email us at{" "}
              <span className="y-t">hello@mugna.tech</span>
            </h6>
          </div>
        </div>
        <Image
          className="o shape"
          src={oShape}
          width="476"
          height="497"
          alt="pic"
        />
        <div className="anti-overflow">
          <Image
            className="y shape"
            src={yShape}
            width="475"
            height="453"
            alt="pic"
            style={{ top: "105px" }}
          />
        </div>
      </div>

      <div className="footer" id="contactUs">
        <Image
          className="b shape"
          src={bShape}
          width="406"
          height="399"
          alt="pic"
        />
        <Image
          className="g shape"
          src={gShape}
          width="376"
          height="387"
          alt="pic"
        />
        <Image
          className="y2 shape"
          src={y2Shape}
          width="450"
          height="475"
          alt="pic"
        />
        <Image
          className="v shape"
          src={vShape}
          width="658"
          height="594"
          alt="pic"
        />

        <div className="spiel">
          <Image
            className="mugnaLogo"
            src={mugnaLogo}
            width="196"
            height="41"
            alt="pic"
          />
          <p>Deliver solutions that create best experiences.</p>
          <p>
            Mugna helps you hire world-className remote developers and designers
            in the Philippines.
          </p>
        </div>

        <div className="inquiries">
          <h3>
            <b>Inquiries</b>
          </h3>
          <p>
            hello@mugna.tech
            <br />
            +63 917 1033 599
          </p>
        </div>

        <div className="address">
          <h3>
            <b>Address</b>
          </h3>
          <p>
            3rd Floor, Lot 8 Block 6 Turquoise Street, Marfori, Davao City,
            Philippines
          </p>
        </div>

        <div className="links">
          <p>
            <Link
              href="https://www.facebook.com/mugna.tech"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              &mdash;Facebook&emsp;
            </Link>

            <Link
              href="https://www.instagram.com/mugna.tech/?hl=en"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              &mdash;Instagram
            </Link>

            <Link
              href="https://www.linkedin.com/company/mugna-tech"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              &emsp;&mdash;LinkedIn
            </Link>
          </p>
        </div>

        <p className="copyright">&#169; Copyright 2021 Mugna Technologies</p>
      </div>
    </div>
  );
}
