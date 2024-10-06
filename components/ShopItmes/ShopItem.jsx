import { useContext } from "react";
import { currencyFormatter } from "../../utl/formatting";
import Button from "../UI/Button";
import CartContext from "../../store/CartContext";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ShopItem({ item }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(item);
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
      <Image
        src={`${item.image}`}
        alt={item.name}
        width={307}
        height={276}
        className="shop-img-cart"
      />
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
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          {item.name}
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
        <Button onClick={handleAddMealToCart}>BUY</Button>
      </CardActions>
    </Card>
  );
}
