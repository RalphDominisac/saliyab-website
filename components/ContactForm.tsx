import React from "react";
import "../app/globals.css";
import { Button } from "@mui/material";
import { Input } from "@mui/material";
import Link from "next/link";
import { formspreeLink } from "../Constants/Formspree_Link/formspreeLink.js";
import { calendlyLink } from "../Constants/Calendly_Link/calendlyLink.js";

// Formspree is only limited to 50 submissions per month
const ContactForm = () => {
  return (
    <div>
      <div className="contact-form">
        {/* Currently linked on my personal email to receive submissions, already sent verification email to hello@mugna.tech to link its email and receive submission */}
        <form action={formspreeLink} method="POST">
          <label>
            Name *
            <Input className="contactInputs" required type="name" name="name" />
          </label>
          <br />
          <br />
          <label>
            Email Address *
            <Input
              className="contactInputs"
              required
              type="email"
              name="email"
            />
          </label>
          <br />
          <br />
          <label>
            Contact Number *
            <Input
              className="contactInputs"
              required
              type="contact"
              name="contact"
            />
          </label>
          <br />
          <br />
          <label>
            Your Message *
            <Input className="contactInputs" required name="message" />
          </label>

          <div className="contact-buttons">
            <Button
              type="submit"
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
                textTransform: "none",
              }}
            >
              Send Message
            </Button>
            <span className="orWord">or</span>
            {/* Call scheduler CALENDLY */}
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
                textTransform: "none",
              }}
            >
              <Link
                href={calendlyLink}
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
              >
                Schedule a Call
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
