import { useState } from "react";

import {
  Alert,
  Box,
  Card,
  CardContent,
  Dialog,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { format } from "date-fns";

import { ProductImage } from "@components/product-image";
import { ProductPrice } from "@components/product-price";
import LoadingButton from "@mui/lab/LoadingButton";

import { useCartActions } from "@hooks/useCart";
import CloseIcon from "@mui/icons-material/Close";
import CartIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useCart } from "@provider/cart";

import theme from "@shared/theme";

import { ProductItemType } from "@interfaces/index";

const MAX_ITEMS_IN_CART = 5;

export const ProductItem = ({ item }: { item: ProductItemType }) => {
  // BETTER APPROACH IS TO SHOW A TOASTER AT THE BOTTOM RIGHT OF THE PAGE
  // CAN USE REACT TOASTIFY PACKAGE IN REAL WORLD PROJECTS
  const [isDialogOpen, setDialogOpen] = useState(false);

  const { handleAddToCart } = useCartActions();
  const { items } = useCart();

  const { name, image, price, stock, createdAt, material } = item;

  const formattedData = format(new Date(createdAt), "dd-mm-yyy");

  const handleAddToCartClick = () => {
    const currentItemInCart = items.find(({ id }) => id === item.id);

    if (
      !items.length ||
      (currentItemInCart && currentItemInCart?.qty < item.stock)
    ) {
      setDialogOpen(false);
      handleAddToCart(item);
      return;
    }

    if (
      items.length + 1 > MAX_ITEMS_IN_CART ||
      (currentItemInCart && currentItemInCart?.qty >= item.stock)
    ) {
      setDialogOpen(true);
      return;
    }

    handleAddToCart(item);
  };

  return (
    <>
      <Card sx={{ maxWidth: 300, margin: "0 auto" }} elevation={1}>
        <ProductImage src={image} alt={name} />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography fontWeight={"bold"}>{name}</Typography>
          <Box mb={1} />
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <ProductPrice
              originalPrice={(+price * 0.2).toString()}
              discountPrice={price}
            />
          </Box>
          <Box mb={1} />

          <LoadingButton
            disabled={stock === 0}
            onClick={handleAddToCartClick}
            startIcon={<CartIcon />}
            //   loading={loading}
            loadingPosition="center"
            variant="contained"
          >
            <Typography variant="body2">
              {stock > 0 ? "Add to cart" : "Sold out"}
            </Typography>
          </LoadingButton>
          <Box mb={1} />

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="body2">{material}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography
              variant="body2"
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
            >
              {stock} in Stock
            </Typography>
            <Divider orientation="vertical" flexItem />

            <Typography variant="body2">{formattedData}</Typography>
          </Box>
        </CardContent>
      </Card>
      {/* A REUSABLE DIALOG COMPONENT CAN BE ADDED WHICH CAN SHOW DIFFERENT MESSAGES IN REAL WORLD PROJECTS */}
      {/* CAN REMOVE STATES TO MANAGE OPEN AND CLOSE USING REACT COMPOUND PATTERN IN REAL WORLD PROJECTS */}
      <Dialog onClose={() => setDialogOpen(false)} open={isDialogOpen}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            backgroundColor: "#ffecf0",
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setDialogOpen(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          <Alert severity="error" sx={{ pb: 3 }}>
            {items.length + 1 > MAX_ITEMS_IN_CART
              ? `You can only add ${MAX_ITEMS_IN_CART} unique items to cart`
              : `Maximum ${item.stock} quantity can be added to cart`}
          </Alert>
        </Toolbar>
      </Dialog>
    </>
  );
};
