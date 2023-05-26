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
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 400;

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // drawer
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <IconButton sx={{ float: "right", mt: 2, mr: 2 }}>
        <CloseIcon style={{ color: "#384558" }} fontSize="large" />
      </IconButton>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image
          className="saliyab-drawer-logo"
          src={saliyab_logo}
          width="891"
          height="274"
          alt="saliyab drawer logo"
          style={{ marginLeft: "28px" }}
        />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            href="#faqsection"
            sx={{ textAlign: "left", textTransform: "none" }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#384558",
                    fontFamily: "Montserrat",
                    fontSize: 22,
                    marginLeft: 45,
                  }}
                >
                  FAQ
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            href="#contactUs"
            sx={{ textAlign: "left", textTransform: "none" }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#384558",
                    fontFamily: "Montserrat",
                    fontSize: 22,
                    marginLeft: 45,
                  }}
                >
                  Contact Us
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      <div className="bottomPush">
        <Typography
          style={{
            fontWeight: "bold",
            color: "#384558",
            fontFamily: "Montserrat",
            fontSize: 22,
            textAlign: "left",
            marginLeft: 52,
          }}
        >
          Get in touch
        </Typography>
        <Typography
          style={{
            color: "#384558",
            fontFamily: "Montserrat",
            fontSize: 22,
            textAlign: "left",
            marginLeft: 52,
          }}
        >
          hello@mugna.tech
        </Typography>
      </div>
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
                style={{ marginLeft: "20px" }}
              />
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              href="#faqsection"
              sx={{ color: "black", left: "-80px", textTransform: "none" }}
            >
              FAQ
            </Button>
            <Button
              href="#contactUs"
              sx={{ color: "black", left: "-60px", textTransform: "none" }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
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
