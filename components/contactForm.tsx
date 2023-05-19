import React from "react";
import "../app/globals.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";
import Typography from "@mui/material/Typography";
import { Input } from "@mui/material";
import Link from "next/link";

// Formspree is only limited to 50 submissions per month
const ContactForm = () => {
  return (
    <div>
      <div className="contact-form">
        {/* Currently linked on my personal email to receive submissions, already sent verification email to hello@mugna.tech to link its email and receive submissiona */}
        <form action="https://formspree.io/f/xdovjvol" method="POST">
          <label>
            Name *
            <Input
              required
              type="name"
              name="name"
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
          </label>
          <br />
          <br />
          <label>
            Email Address *
            <Input
              required
              type="email"
              name="email"
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
          </label>
          <br />
          <br />
          <label>
            Contact Number *
            <Input
              required
              type="contact"
              name="contact"
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
          </label>
          <br />
          <br />
          <label>
            Your Message *
            <Input
              required
              name="message"
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
            or
            {/* Call scheduler */}
            {/* I used https://calndr.link/ for call scheduler */}
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
                href="https://calndr.link/e/RUPAHCtTRt?s=google"
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
