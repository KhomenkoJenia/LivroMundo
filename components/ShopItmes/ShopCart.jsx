"use client";

import ShopItem from "./ShopItem";
import { fetchProducts } from "../../store/slice/ProductsSlice";
import { Box, List, Typography, Slider, TextField } from "@mui/material";
import Button from "../UI/Button";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ShopCart() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  const [visibleCount, setVisibleCount] = useState(8);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleTitleChange = (event) => {
    setSearchTitle(event.target.value.toLowerCase());
  };

  // Фильтрация продуктов
  const filteredProducts = items.filter(
    (item) =>
      item.price >= priceRange[0] &&
      item.price <= priceRange[1] &&
      item.title.toLowerCase().includes(searchTitle)
  );

  if (status === "loading") return <Typography>Загрузка...</Typography>;
  if (status === "failed")
    return <Typography>Ошибка при загрузке данных.</Typography>;

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

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-around" },
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 300,
            marginBottom: "20px",
            marginRight: { xs: "0", md: "100px" },
          }}
        >
          <Typography gutterBottom>Filter by Price</Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            sx={{ color: "#ffd012" }}
          />
          <Typography>
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </Typography>
        </Box>

        <Box sx={{ width: 300, margin: { xs: "0 auto", md: "0 0" } }}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchTitle}
            onChange={handleTitleChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                "& fieldset": { border: "2px solid #ffd012" },
                "&:hover fieldset": {
                  borderColor: "#a5a2a2",
                  transition: "0.9s",
                },
                "&:active fieldset": { borderColor: "#ffd012" },
              },
              input: { color: "#ffd012" },
              label: { color: "#000000" },
            }}
          />
        </Box>
      </Box>

      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1300px",
          flexWrap: "wrap",
        }}
      >
        {filteredProducts.slice(0, visibleCount).map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </List>

      {visibleCount < filteredProducts.length && (
        <Button variant="contained" onClick={handleSeeMore} textOnly>
          See More
        </Button>
      )}
    </Box>
  );
}
