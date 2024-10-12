import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice/ProductsSlice";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopItem from "../ShopItmes/ShopItem";

export default function ContentSlider() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Загрузка...</p>;
  }

  if (status === "failed") {
    return <p>Ошибка при загрузке продуктов.</p>;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: { xs: "300px", md: "900px" }, margin: "0 auto" }}>
      <Slider {...settings}>
        {items.map((item) => (
          <Box key={item.id}>
            <ShopItem item={item} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
