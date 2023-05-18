"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import saliyab_logo from "../resources/Logo/saliyab_logo.webp";
import saliyab_plain_logo from "../resources/Logo/saliyab_plain_logo.webp";
import "../app/globals.css";
import Link from "next/link";
import { Container } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
// const navItems = ["FAQ", "Contact Us"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image
          className="saliyab-plain-logo"
          src={saliyab_plain_logo}
          width="891"
          height="274"
          alt="saliyab plain logo"
          style={{ marginLeft: "68px" }}
        />
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <ListItem disablePadding>
          <ListItemButton href="#faqsection" sx={{ textAlign: "center" }}>
            <ListItemText primary={"FAQ"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="#contactUs" sx={{ textAlign: "center" }}>
            <ListItemText primary={"Contact Us"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* ------------------fix center saliyab logo on mobile------------------------- */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block" },
            }}
          >
            <Link href="#landingpage">
              <Image
                className="saliyab-logo"
                src={saliyab_logo}
                width="891"
                height="274"
                alt="saliyab logoo"
                style={{ marginLeft: "57px" }}
              />
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: "black" }}>
                {item}
              </Button>
            ))} */}
            <Button href="#faqsection" sx={{ color: "black", left: "-80px" }}>
              FAQ
            </Button>
            <Button href="#contactUs" sx={{ color: "black", left: "-60px" }}>
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

// "use-client";
// import Image from "next/image";
// import saliyab_logo from "../resources/Logo/saliyab_logo.webp";

// const navbar = () => {
//   return (
//     <div>
//       <nav>
//         <Image
//           classNameName="saliyab-logo"
//           src={saliyab_logo}
//           width="891"
//           height="274"
//           alt="saliyab logoo"
//         />
//         <p>
//           <a>FAQ</a> <a>Contact Us</a>
//         </p>
//         <div classNameName="burger">
//           <div classNameName="patty"></div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default navbar;
