import { LoadingButton } from "@mui/lab";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CartIcon from "@mui/icons-material/ShoppingBagOutlined";

import { ProductImage } from "@components/product-image";

import { convertAmountToBaht } from "@utils/index";

import theme from "@shared/theme";

export const CartInfo = () => {
  return (
    <Box width={400} display="flex" flexDirection={"column"}>
      <Box mt={2} />

      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <CartIcon />
        <Typography
          variant="h5"
          textAlign={"center"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          ml={1}
        >
          Item
        </Typography>
      </Box>

      <Divider sx={{ m: 2, mb: 0 }} />

      <Box flexGrow={1} maxHeight={["80vh", "75vh"]} overflow={"auto"}>
        {Array.from(Array(7)).map((_, index) => (
          <>
            <Box key={index} display={"flex"} p={2} alignItems={"center"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <IconButton aria-label="Reduce Quantity" color="error">
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography mx={1}>5</Typography>
                <IconButton aria-label="Increase Quantity" color="error">
                  <AddCircleOutlineIcon />
                </IconButton>
              </Box>
              <ProductImage
                src="https://robohash.org/Ericka Berge.png"
                width={60}
                height={60}
              />
              <Box
                display={"flex"}
                flexDirection={"column"}
                flexGrow={1}
                ml={2}
              >
                <Typography fontWeight={"bold"}>Jedediah Schuster</Typography>
                <Typography variant="caption">$250.00 x 5</Typography>
                <Box mt={1} />
                <Typography
                  color={theme.palette.primary.main}
                  variant="body2"
                  fontWeight={"bold"}
                >
                  ฿1,200.00
                </Typography>
              </Box>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider sx={{ mx: 2 }} />
          </>
        ))}
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        p={4}
      >
        <LoadingButton
          onClick={() => {
            console.log("CLICK");
          }}
          startIcon={<CartIcon />}
          loadingPosition="center"
          variant="contained"
          fullWidth
        >
          <Typography variant="body1" textTransform={"capitalize"}>
            Checkout ({convertAmountToBaht(4000)})
          </Typography>
        </LoadingButton>
        <Box mt={2} />
        <Button
          fullWidth
          variant="outlined"
          sx={{
            textTransform: "capitalize",
          }}
        >
          View Cart
        </Button>
      </Box>
    </Box>
  );
};
