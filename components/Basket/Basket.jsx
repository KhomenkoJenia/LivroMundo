import { currencyFormatter } from "../../utl/formatting";
import FormCart from "./FormCart";
import CartItem from "./CartItem";
import { Box, List, Typography } from "@mui/material";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import {
  addItem,
  removeItem,
  clearItemCompletely,
} from "../../store/slice/CartSlice";

export default function Basket() {
  const items = useSelector((state) => state.cart.items);
  const itemsLength = items.length;
  const dispatch = useDispatch();

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "flex" },
        maxWidth: "1217px",
        margin: { xs: "60px auto", md: "145px auto" },
        backgroundColor: "transparent",
        borderRadius: "30px",
        flexDirection: { xs: "column", md: "row" },
        padding: "0 10px",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "flex" },
          borderRadius: { xs: "30px 30px 0 0", md: "30px 0 0 30px" },
          padding: { xs: "10px", md: "60px 60px " },
          backgroundColor: "#ffffff",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: "817px",
          flexGrow: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "24px" },
            fontWeight: "bold",
            color: "#333",
            borderBottom: 1,
            borderColor: "#333",
          }}
        >
          Shopping Cart
        </Typography>
        {itemsLength > 0 ? (
          <List>
            {items.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                image={item.image}
                onIcrease={() => dispatch(addItem(item))}
                onDecrease={() => dispatch(removeItem(item.id))}
                clearCart={() => dispatch(clearItemCompletely(item.id))}
              />
            ))}
          </List>
        ) : (
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: { xs: "20px", md: "40px" },
              padding: "40px",
              color: "#000000",
            }}
          >
            Nothing here yet
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            padding: "0px 15px",
          }}
        >
          <Link className="link-back" href="./shop">
            Back to shop
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "16px",
                marginRight: "20px",
                color: "#000000",
              }}
            >
              Subtotal:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "18px",
                color: "#004832",
              }}
            >
              {currencyFormatter.format(cartTotal)}
            </Typography>
          </Box>
        </Box>
      </Box>
      <FormCart lenghtAray={currencyFormatter.format(cartTotal)} />
    </Box>
  );
}
