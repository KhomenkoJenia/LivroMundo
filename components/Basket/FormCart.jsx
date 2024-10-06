import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import Image from "next/image";

export default function PaymentForm() {
  const { handleSubmit, control, reset } = useForm();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const textFieldStyles = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      "& fieldset": {
        border: "2px solid #ffffff",
      },
      "&:hover fieldset": {
        borderColor: "#a5a2a2",
      },
      "&:active fieldset": {
        borderColor: "#a5a2a2",
      },
    },
    input: { color: "#ffffff" },
    label: { color: "#ffffff" },
  };

  const validationRules = {
    nameOnCard: {
      required: "Name on card is required",
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: "Name can only contain letters",
      },
      minLength: {
        value: 2,
        message: "Name must be at least 2 characters",
      },
    },
    cardNumber: {
      required: "Card number is required",
      pattern: {
        value: /^\d+$/,
        message: "Card number must only contain digits",
      },
      minLength: {
        value: 16,
        message: "Card number must be 16 digits",
      },
      maxLength: {
        value: 16,
        message: "Card number must be 16 digits",
      },
    },
    securityCode: {
      required: "Security code is required",
      pattern: {
        value: /^\d+$/,
        message: "Security code must only contain digits",
      },
      minLength: {
        value: 3,
        message: "Security code must be at least 3 digits",
      },
      maxLength: {
        value: 4,
        message: "Security code must be no more than 4 digits",
      },
    },
  };

  const onSubmit = (data) => {
    console.log(data);
    setOpenSnackbar(true);
    reset();
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#004832",
        color: "#ffffff",
        borderRadius: { xs: "0 0 30px 30px", md: "0 30px 30px 0" },
        padding: { xs: "10px", md: "60px 60px " },
        width: { xs: "100%", md: "400px " },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontFamily: "Poppins",
          fontWeight: "bold",
          fontSize: { sm: "16px", md: "24px" },
          color: "#ffffff",
          borderBottom: 1,
          borderColor: "#ffffff",
        }}
      >
        Card details
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Select payment method
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Image
          src="/assets/mastercart.png"
          alt="master"
          width={64}
          height={30}
        />
        <Image src="/assets/ipay.png" alt="ipay" width={64} height={30} />
        <Image src="/assets/visa.png" alt="visa" width={64} height={30} />
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="nameOnCard" sx={{ color: "#ffffff", mb: 1 }}>
          Name on card
        </InputLabel>
        <Controller
          name="nameOnCard"
          control={control}
          defaultValue=""
          rules={validationRules.nameOnCard}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              id="nameOnCard"
              variant="outlined"
              placeholder="Enter name on card"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ""}
              sx={textFieldStyles}
            />
          )}
        />

        <InputLabel htmlFor="cardNumber" sx={{ color: "#ffffff", mb: 1 }}>
          Card number
        </InputLabel>
        <Controller
          name="cardNumber"
          control={control}
          defaultValue=""
          rules={validationRules.cardNumber}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              id="cardNumber"
              variant="outlined"
              placeholder="0000 0000 0000 0000"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ""}
              sx={textFieldStyles}
            />
          )}
        />

        <InputLabel htmlFor="expiryMonth" sx={{ color: "#ffffff", mb: 1 }}>
          Card expiration
        </InputLabel>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Controller
            name="expiryMonth"
            control={control}
            defaultValue=""
            rules={{ required: "Month is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                id="expiryMonth"
                select
                label="Month"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : ""}
                sx={textFieldStyles}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Controller
            name="expiryYear"
            control={control}
            defaultValue=""
            rules={{ required: "Year is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                id="expiryYear"
                select
                label="Year"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : ""}
                sx={textFieldStyles}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <MenuItem key={i + 2023} value={i + 2023}>
                    {i + 2023}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Box>

        <InputLabel htmlFor="securityCode" sx={{ color: "#ffffff", mb: 1 }}>
          Security Code
        </InputLabel>
        <Controller
          name="securityCode"
          control={control}
          defaultValue=""
          rules={validationRules.securityCode}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              id="securityCode"
              variant="outlined"
              placeholder="Enter security code"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ""}
              sx={textFieldStyles}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="warning"
          fullWidth
          sx={{
            paddingY: 2,
            borderRadius: "30px",
            backgroundColor: "#fdd349",
            color: "#000000",
          }}
        >
          Continue
        </Button>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#4caf50",
            color: "#ffffff",
            fontSize: "1.25rem",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
            mb: "20px",
          },
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{
            width: "100%",
            fontWeight: "bold",
          }}
        >
          Спасибо, все успешно!
        </Alert>
      </Snackbar>
    </Box>
  );
}
