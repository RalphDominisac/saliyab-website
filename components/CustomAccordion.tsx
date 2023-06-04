import { useState } from "react";
import { Collapse, Box, Divider, IconButton } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import "../app/globals.css";

function CustomAccordion(props: any) {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        height="60px"
        alignItems="center"
        className="accordionStyling"
      >
        <Box className="sectionTitleAccordion" sx={{ fontWeight: "bold" }}>
          {data.sectionTitle}
        </Box>
        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            transform: `${isOpen && "rotate(180deg)"}`,
            transition: "transform .2s ease-out",
          }}
        >
          {isOpen ? (
            <AddCircle sx={{ color: "#384558" }} />
          ) : (
            <RemoveCircle sx={{ color: "#384558" }} />
          )}
        </IconButton>
      </Box>
      <Collapse in={!isOpen} sx={{ textAlign: "left" }}>
        <Box className="sectionContentAccordion" paddingBottom="24px">
          {data.sectionContent}
        </Box>
      </Collapse>
      <Divider className="accordionDivider" />
    </>
  );
}

export default CustomAccordion;
