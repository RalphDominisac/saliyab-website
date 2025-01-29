import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import leftArrow from "../resources/Shape Elements/left-arrow.webp";
import rightArrow from "../resources/Shape Elements/right-arrow.webp";
import Image from "next/image";
import "../app/globals.css";

export default function Example() {
  var items = [
    {
      name: " Saliyab's workshop was a game-changer for me. The insights and practical advice I gained from the experts in the field helped me totake my skills to the next level and make a real impact in my work. I highly recommend it! ",
      description: "-Juan Dela Cruz",
    },
    {
      name: " I've attended several workshops in the past, but Saliyab's was by far the most informativeand engaging. The speakers were knowledgeable and approachable, and I left feeling motivated and inspired to pursue new opportunities in the tech industry. ",
      description: "-Arthur Morgan",
    },
    {
      name: " The Saliyab workshop provided me with a wealth of new information and resources that I could immediately apply to my work. I appreciated the hands-on approach and the chance to network with other professionals in the field. ",
      description: "-John Marston",
    },
    {
      name: " As a beginner in the tech industry, I was a bit intimidated to attend the Saliyab workshop. But I'm so glad I did! The workshop was tailored to all skill levels and I left with a much deeper understanding of the field and its possibilities. ",
      description: "-Hosea Matthews",
    },
  ];

  return (
    <Carousel
      className="muiCarousel"
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "rgba(242,242,242,0)",
          borderRadius: 0,
          color: "#f2f2f2",
          opacity: 100,
        },
      }}
      indicatorIconButtonProps={{
        style: {
          opacity: 0,
        },
      }}
      NextIcon={
        <Image
          className="right-arrow"
          src={rightArrow}
          alt="right arrow pic"
          color="#f2f2f2"
        />
      }
      PrevIcon={
        <Image
          className="left-arrow"
          src={leftArrow}
          width="107"
          height="104"
          alt="left arrow pic"
          color="#f2f2f2"
        />
      }
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <Paper
      className="muiPaper"
      style={{
        border: "3px solid #384558",
      }}
    >
      <q className="testimonyText">{props.item.name}</q>
      {/* <p className="testimonyQuoter">{props.item.description}</p> */}
    </Paper>
  );
}
