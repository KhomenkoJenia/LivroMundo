import { Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Box
        sx={{
          fontFamily: "Poppins",
          fontWeight: "700",
          fontSize: "30px",
          padding: "40px",
          color: "#000000",
          textAlign: "center",
          height: "500px",
          marginRight: "10px",
        }}
      >
        <Link className="link-back" href="./shop">
          Go to shop
        </Link>
      </Box>
    </div>
  );
}
