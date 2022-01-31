import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { format } from "date-fns";

import LoadingButton from "@mui/lab/LoadingButton";

import CartIcon from "@mui/icons-material/ShoppingBagOutlined";

import { ProductImage } from "@components/product-image";
import { ProductPrice } from "@components/product-price";

import theme from "@shared/theme";

export const ProductItem = () => {
  const formattedData = format(
    new Date("2022-01-24T01:09:51.159Z"),
    "dd-mm-yyy"
  );

  return (
    <Card sx={{ maxWidth: 300, margin: "0 auto" }} elevation={1}>
      <ProductImage src="https://robohash.org/Ericka Berge.png" />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography fontWeight={"bold"}>Jedediah Schuster</Typography>
        <Box mb={1} />
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <ProductPrice originalPrice={1200} discountPrice={800} />
        </Box>
        <Box mb={1} />

        <LoadingButton
          onClick={() => {
            console.log("CLICK");
          }}
          startIcon={<CartIcon />}
          //   loading={loading}
          loadingPosition="center"
          variant="contained"
        >
          <Typography variant="body2">Add To Bag</Typography>
        </LoadingButton>
        <Box mb={1} />

        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="body2">Frozen</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography
            variant="body2"
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
          >
            25 in Stock
          </Typography>
          <Divider orientation="vertical" flexItem />

          <Typography variant="body2">{formattedData}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
