import { currencyFormatter } from "../../utl/formatting";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "../UI/Button";
import Image from "next/image";
import { Box } from "@mui/material";

export default function CartItem({
  name,
  quantity,
  price,
  onIcrease,
  onDecrease,
  image,
  clearCart,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          flexGrow: 1,
          flexWrap: "wrap",
          backgroundColor: "#3030301A",
          boxShadow: "none",
          maxWidth: "100%",
          margin: { xs: "10px 7px", md: "24px 7px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Poppins",
          fontWeight: "400",
          fontSize: { xs: "12px", md: "16px" },
          borderRadius: "30px",
          padding: { xs: "20px 7px", md: "10px" },
        }}
      >
        <Image src={image} alt={name} width={105} height={105} />
        <CardContent
          sx={{
            color: "#1f1a09",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: { xs: "12px", md: "16px" },
            }}
          >
            {name}
          </Typography>
        </CardContent>
        <Typography sx={{ fontFamily: "Poppins", fontWeight: "400" }}>
          {currencyFormatter.format(price)}
        </Typography>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: { xs: "15px 15px", md: "0px 15px" },
          }}
        >
          <Button className="button-change" onClick={onDecrease}>
            -
          </Button>
          <Typography>{quantity}</Typography>

          <Button className="button-change" onClick={onIcrease}>
            +
          </Button>
        </CardActions>
      </Card>
      <Image
        onClick={clearCart}
        className="delete-img"
        src="/assets/delete.svg"
        alt="Logo"
        width={21}
        height={22}
      />
    </Box>
  );
}
