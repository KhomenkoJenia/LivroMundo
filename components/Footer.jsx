import React from "react";
import { Box, Typography, Container } from "@mui/material";

import Image from "next/image";

export default function Footer() {
  return (
    <Container
      className="footer-box"
      maxWidth="xls"
      sx={{
        backgroundColor: "#004832",
        paddingLeft: { xs: 3, sm: 20 },
        paddingRight: { xs: 3, sm: 20 },
        color: "#ffffff",
        display: "flex",
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        padding: "20px",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 3, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 3, md: 2 },
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Image
            src="/assets/logo.svg"
            className="logo-img"
            alt="kogo"
            width={295}
            height={58}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 1, mt: { xs: 2, md: 0 } }}>
          <Image src="/assets/facebook.png" alt="kogo" width={30} height={30} />
          <Image
            src="/assets/instagram.png"
            alt="kogo"
            width={30}
            height={30}
          />
          <Image
            src="/assets/pinterest.png"
            alt="kogo"
            width={30}
            height={30}
          />
          <Image src="/assets/twiter.png" alt="kogo" width={30} height={30} />
        </Box>
        <Typography
          sx={{
            fontWeight: 400,
            fontFamily: "Inter",
            fontSize: "14px",
          }}
        >
          ©LivroMundo JSC, 2023 - 2024
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          mt: { xs: 2, md: 0 },
          gap: { xs: 1, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: { xs: "center", md: "center" },
          }}
        >
          <Image src="/assets/adres.svg" alt="kogo" width={34} height={39} />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          >
            Statensingel 52, 3039 LP Rotterdam, Netherlands
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <Image src="/assets/phone.svg" alt="kogo" width={34} height={34} />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          >
            +31 6 18426954
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <Image src="/assets/meil.svg" alt="kogo" width={34} height={30} />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          >
            info@moviestore.nl
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
