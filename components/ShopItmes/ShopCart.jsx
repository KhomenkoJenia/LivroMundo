import ShopItem from "./ShopItem";
import DUMMY from "./Itmes";
import { Box, List, Typography } from "@mui/material";
import Button from "../UI/Button";
import React, { useState } from "react";

export default function ShopCart() {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const filteredBook = DUMMY;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: { xs: "20px", md: "70px" },
        marginTop: { xs: "40px", md: "100px" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        SHOP
      </Typography>
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1300px",
          flexWrap: "wrap",
        }}
      >
        {filteredBook.slice(0, visibleCount).map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </List>
      {visibleCount < filteredBook.length && (
        <Button variant="contained" onClick={handleSeeMore} textOnly>
          See More
        </Button>
      )}
    </Box>
  );
}
