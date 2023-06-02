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

// import { useState } from "react";
// import { Collapse, Box, Divider, IconButton } from "@mui/material";
// import { AddCircle, RemoveCircle } from "@mui/icons-material";
// import { accordionData } from "../Constants/Accordion_Data/accordionData.js";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// import SearchIcon from "@mui/icons-material/Search";

// function CustomAccordion() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [search, setSearch] = useState("");

//   return (
//     <div>
//       <div className="wrapper">
//         <div className="icon">
//           <SearchIcon />
//         </div>
//         <input
//           onChange={(e) => setSearch(e.target.value)}
//           type="text"
//           src="SearchIcon"
//           placeholder="Search"
//           style={{ borderColor: "#384558" }}
//         />
//       </div>

//       {accordionData
//         .filter((item) => {
//           return search.toLowerCase() === ""
//             ? item
//             : item.sectionTitle.toLowerCase().includes(search);
//         })
//         .map((item) => (
//           <>
//             <Box
//               display="flex"
//               justifyContent="space-between"
//               height="60px"
//               alignItems="center"
//               className="accordionStyling"
//             >
//               <Box sx={{ fontWeight: "bold" }}>{item.sectionTitle}</Box>
//               <IconButton
//                 onClick={() => setIsOpen(!isOpen)}
//                 sx={{
//                   transform: `${isOpen && "rotate(180deg)"}`,
//                   transition: "transform .2s ease-out",
//                 }}
//               >
//                 {isOpen ? (
//                   <AddCircle sx={{ color: "#384558" }} />
//                 ) : (
//                   <RemoveCircle sx={{ color: "#384558" }} />
//                 )}
//               </IconButton>
//             </Box>
//             <Collapse in={!isOpen} sx={{ textAlign: "left" }}>
//               <Box paddingBottom="24px">{item.sectionContent}</Box>
//             </Collapse>
//             <Divider />
//           </>
//         ))}
//     </div>
//   );
// }

// export default CustomAccordion;
