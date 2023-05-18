"use client";
import Image from "next/image";
import Head from "next/head";
// import styles from "./page.module.css";
// import scripts  from './scripts';
import Script from "next/script";
// import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import our_journey from "../resources/Carousel Images/Untitled1.webp";
import what_is_saliyab from "../resources/Carousel Images/Saliyab.webp";
import testimonies_vector from "../resources/Illustrations/vector3.webp";
import want_to_experience from "../resources/Illustrations/vector5.webp";
import faq_vector from "../resources/Illustrations/vector4.2.webp";
import o_shape from "../resources/Shape Elements/o.webp";
import y_shape from "../resources/Shape Elements/y.webp";
import b_shape from "../resources/Shape Elements/b.webp";
import g_shape from "../resources/Shape Elements/g.webp";
import y2_shape from "../resources/Shape Elements/y2.webp";
import v_shape from "../resources/Shape Elements/v.webp";
import mugna_logo from "../resources/Logo/mugna_logo.webp";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Accordion from "../components/accordion";
import "./globals.css";

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
        <Image src={our_journey} width="1150" height="864" alt="pic" />
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
            src={what_is_saliyab}
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
            src={testimonies_vector}
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
          src={want_to_experience}
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
          <div className="contact-form">
            <TextField
              required
              className="contact_input"
              id="standard-required"
              label="Name"
              defaultValue=" "
              variant="standard"
              sx={{
                width: {
                  xs: "350px",
                  sm: "450px",
                  md: "600px",
                  lg: "750px",
                  xl: "750px",
                },
              }}
            />
            <br />
            <br />
            <TextField
              required
              className="contact_input"
              id="standard-required"
              label="Email Address"
              defaultValue=" "
              variant="standard"
              sx={{
                width: {
                  xs: "350px",
                  sm: "450px",
                  md: "600px",
                  lg: "750px",
                  xl: "750px",
                },
              }}
            />
            <br />
            <br />
            <TextField
              required
              className="contact_input"
              id="standard-required"
              label="Contact Number"
              defaultValue=" "
              variant="standard"
              sx={{
                width: {
                  xs: "350px",
                  sm: "450px",
                  md: "600px",
                  lg: "750px",
                  xl: "750px",
                },
              }}
            />
            <br />
            <br />
            <TextField
              required
              className="contact_input"
              id="standard-required"
              label="Your Message"
              defaultValue=" "
              variant="standard"
              sx={{
                width: {
                  xs: "350px",
                  sm: "450px",
                  md: "600px",
                  lg: "750px",
                  xl: "750px",
                },
              }}
            />

            <div className="contact-buttons">
              <Button
                variant="outlined"
                sx={{
                  margin: "10px 0 300px 0",
                  color: "black",
                  borderRadius: "15px",
                  borderColor: "black",
                  ":hover": {
                    bgcolor: "rgba(25, 25, 25, 0.5)", // theme.palette.primary.main
                    color: "black",
                    borderColor: "black",
                  },
                }}
              >
                Send Message
              </Button>
              or
              <Button
                variant="outlined"
                sx={{
                  margin: "10px 0 300px 0",
                  color: "black",
                  borderRadius: "15px",
                  borderColor: "black",
                  ":hover": {
                    bgcolor: "rgba(25, 25, 25, 0.5)", // theme.palette.primary.main
                    color: "black",
                    borderColor: "black",
                  },
                }}
              >
                Schedule a Call
              </Button>
            </div>
          </div>
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
            <input type="text" placeholder="Search" />
            <Accordion />
          </div>
          <Image
            className="v-4-2"
            src={faq_vector}
            width="4074"
            height="4317"
            alt="pic"
          />

          <div className="faq-dd">
            <h5>
              <b>Who can attend Saliyab workshops?</b>
            </h5>
            <div className="faq-line"></div>
            <h5>
              <b>What topics are covered in Saliyab workshops?</b>
            </h5>
            <div className="faq-line"></div>
            <h5>
              <b>How can I register for a Saliyab workshop?</b>
            </h5>
            <div className="faq-line"></div>
            <h5>
              <b>How can I stay informed about upcoming Saliyab workshops?</b>
            </h5>
            <div className="faq-line"></div>
          </div>
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
          src={o_shape}
          width="476"
          height="497"
          alt="pic"
        />
        <div className="anti-overflow">
          <Image
            className="y shape"
            src={y_shape}
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
          src={b_shape}
          width="406"
          height="399"
          alt="pic"
        />
        <Image
          className="g shape"
          src={g_shape}
          width="376"
          height="387"
          alt="pic"
        />
        <Image
          className="y2 shape"
          src={y2_shape}
          width="450"
          height="475"
          alt="pic"
        />
        <Image
          className="v shape"
          src={v_shape}
          width="658"
          height="594"
          alt="pic"
        />

        <div className="spiel">
          <Image
            className="mugna_logo"
            src={mugna_logo}
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
            <a>&mdash;Facebook&emsp;</a>
            <a>&mdash;Instagram</a>
            <a>&emsp;&mdash;LinkedIn</a>
          </p>
        </div>

        <p className="copyright">&#169; Copyright 2021 Mugna Technologies</p>
      </div>
    </div>
  );
}
