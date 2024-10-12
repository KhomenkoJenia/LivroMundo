import { currencyFormatter } from "../../utl/formatting";
import { useDispatch } from "react-redux";

import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ButtonSale from "../UI/ButtonSale";
import { addItem } from "../../store/slice/CartSlice";

export default function ShopItem({ item }) {
  const dispatch = useDispatch();

  function handleAddMealToCart() {
    dispatch(addItem(item));
  }

  return (
    <Card
      sx={{
        maxWidth: 307,
        backgroundColor: "transparent",
        boxShadow: "none",

        margin: { xs: "15px 7px", md: "28px 7px" },
      }}
    >
      <Box
        sx={{
          width: 307,
          position: "relative",
          height: 290,
          marginBottom: "20px",
        }}
      >
        <Image
          src={`${item.image}`}
          alt={item.name}
          layout="fill" // Используем fill для того, чтобы изображение заполнило контейнер
          objectFit="cover" // Масштабируем и обрезаем, чтобы заполнить контейнер
          className="shop-img-cart"
        />
      </Box>
      <CardContent
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "30px 30px 0 0",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontSize: "15px",
            textAlign: "center",
            minHeight: 50,
          }}
        >
          {item.title}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "0 10px 8px 35px",
          backgroundColor: "#ffffff",
          borderRadius: "0 0 30px 30px",
          boxShadow: `
          0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 3px 1px 0px rgba(0, 0, 0, 0.14),
          0px 3px 3px 0px rgba(0, 0, 0, 0.12)
        `,
          marginBottom: "4px",
        }}
      >
        <Typography sx={{ color: "#FF0000" }}>
          {currencyFormatter.format(item.price)}
        </Typography>
        <ButtonSale onClick={handleAddMealToCart}>BUY</ButtonSale>
      </CardActions>
    </Card>
  );
}
