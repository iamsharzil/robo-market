import React from "react";

import { Box, Divider, IconButton, Typography } from "@mui/material";

import { ProductImage } from "@components/product-image";

import { useCartActions } from "@hooks/useCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CartIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useCart } from "@provider/cart";

import { convertAmountToBaht } from "@utils/index";

import theme from "@shared/theme";

export const CartInfo = () => {
  const { items, totalAmount } = useCart();
  const { handleRemoveFromCart, handleUpdateCart } = useCartActions();

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
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Box display={"flex"} p={2} alignItems={"center"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <IconButton
                  aria-label="Reduce Quantity"
                  color="error"
                  onClick={() =>
                    handleUpdateCart({ ...item, qty: item.qty - 1 })
                  }
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography mx={1}>{item.qty}</Typography>
                <IconButton
                  aria-label="Increase Quantity"
                  color="error"
                  onClick={() =>
                    handleUpdateCart({ ...item, qty: item.qty + 1 })
                  }
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Box>
              <ProductImage src={item.image} width={60} height={60} />
              <Box
                display={"flex"}
                flexDirection={"column"}
                flexGrow={1}
                ml={2}
              >
                <Typography fontWeight={"bold"}>{item.name}</Typography>
                <Typography variant="caption">
                  {convertAmountToBaht(+item.price)} x {item.qty}
                </Typography>
                <Box mt={1} />
                <Typography
                  color={theme.palette.primary.main}
                  variant="body2"
                  fontWeight={"bold"}
                >
                  {convertAmountToBaht(+item.price * +item.qty)}
                </Typography>
              </Box>
              <IconButton onClick={() => handleRemoveFromCart(item.id)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider sx={{ mx: 2 }} />
          </React.Fragment>
        ))}
      </Box>

      {totalAmount > 0 ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          p={4}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            ORDER TOTAL
          </Typography>
          <Typography variant="body1" textTransform={"capitalize"}>
            {convertAmountToBaht(totalAmount)}
          </Typography>
        </Box>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          p={4}
        >
          <Typography variant="h6" textTransform={"capitalize"}>
            OOPS!
          </Typography>
          <Typography variant="h6" textTransform={"capitalize"}>
            Your Cart is Empty!
          </Typography>
        </Box>
      )}
    </Box>
  );
};
