"use client";

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import logoImg from "/public/assets/logo.svg";
import buyImg from "/public/assets/buy.svg";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const router = useRouter();

  const items = useSelector((state) => state.cart.items);

  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isActiveLink = (path) => router.pathname === path;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: { xs: "#004832" },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingLeft: { xs: 3, sm: 20 },
          paddingRight: { xs: 3, sm: 20 },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Image className="logo-img" src={logoImg} alt="Logo" width={295} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Box
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "900px",
                    maxWidth: "100%",
                    padding: "20px",
                    backgroundColor: "#edebeb",
                  }}
                >
                  {[
                    { path: "/", label: "Home" },
                    { path: "/shop", label: "Shop" },
                    { path: "/about", label: "About" },
                    { path: "/contacts", label: "Contacts" },
                  ].map((link) => (
                    <Link key={link.path} href={link.path} passHref>
                      <Typography
                        sx={{
                          color: isActiveLink(link.path)
                            ? "#004832"
                            : "#000000",

                          transition: "background-color 0.3s ease",
                          cursor: "pointer",
                        }}
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              backgroundColor: "#ffffff",
              borderRadius: "30px",
            }}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/shop", label: "Shop" },
              { path: "/about", label: "About" },
              { path: "/contacts", label: "Contacts" },
            ].map((link) => (
              <Link key={link.path} href={link.path} passHref>
                <Typography
                  sx={{
                    color: isActiveLink(link.path) ? "#00714f" : "#000000",

                    transition: "background-color 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: "2px" }}>
              <Link href="/order" passHref>
                <Image
                  className="shop-img"
                  src={buyImg}
                  alt="Logo"
                  width={44}
                />
              </Link>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  display: { xs: "none", md: "block" },
                  fontSize: { xs: "16px", md: "25px" },
                  color: "#FFD012",
                  marginLeft: "5px",
                }}
              >
                ({totalCartItems})
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
