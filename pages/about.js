import { Typography } from "@mui/material";

export default function About() {
  return (
    <div>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: "700",
          fontSize: "50px",
          padding: "40px",
          color: "#000000",
          textAlign: "center",
          height: "500px",
        }}
      >
        About
      </Typography>
    </div>
  );
}
