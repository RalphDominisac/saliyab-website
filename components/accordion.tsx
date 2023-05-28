import * as React from "react";
import { useState } from "react";
import AccordionMUI from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../app/globals.css";
import { accordionData } from "../Constants/Accordion_Data/accordionData.js";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import SearchIcon from "@mui/icons-material/Search";

export default function Accordion() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="icon">
          <SearchIcon />
        </div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          src="SearchIcon"
          placeholder="Search"
          style={{ borderColor: "#384558" }}
        />
      </div>

      {accordionData
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.sectionTitle.toLowerCase().includes(search);
        })
        .map((item) => (
          <AccordionMUI
            key={item.id}
            expanded={Number(expanded) === item.id}
            onChange={handleChange(item.id)}
            className="accordionMui"
          >
            <AccordionSummary
              expandIcon={
                Number(expanded) === item.id ? (
                  <RemoveCircleIcon sx={{ color: "#384558" }} />
                ) : (
                  <AddCircleIcon sx={{ color: "#384558" }} />
                )
              }
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
