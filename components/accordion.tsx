import * as React from "react";
import { useState } from "react";
import AccordionMUI from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../app/globals.css";
import { accordionData } from "./accordionData.js";

export default function Accordion() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search"
      />

      {accordionData
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.sectionTitle.toLowerCase().includes(search);
        })
        .map((item) => (
          <AccordionMUI key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <b>{item.sectionTitle}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.sectionContent}</Typography>
            </AccordionDetails>
          </AccordionMUI>
        ))}
    </div>
  );
}
