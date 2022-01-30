import Image from "next/image";

import { format } from "date-fns";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

import theme from "@shared/theme";

export const ProductItem = () => {
  const priceInBaht = new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  });

  const formattedData = format(
    new Date("2022-01-24T01:09:51.159Z"),
    "dd-mm-yyy"
  );

  return (
    <Card sx={{ maxWidth: 300, margin: "0 auto" }} elevation={1}>
      <Box width={120} height={120} mx={"auto"} position={"relative"}>
        <Image
          src={"https://robohash.org/Jedediah Schuster.png?size=120x120"}
          alt="..."
          layout="fill"
        />
      </Box>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography fontWeight={"bold"}>Jedediah Schuster</Typography>
        <Box mb={1} />
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Typography
            variant="body2"
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
          >
            {priceInBaht.format(837.69)}
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.secondary.main}
            ml={1}
            sx={{
              textDecoration: "line-through",
            }}
          >
            {priceInBaht.format(1000)}
          </Typography>
        </Box>
        <Box mb={1} />

        <LoadingButton
          onClick={() => {
            console.log("CLICK");
          }}
          startIcon={<ShoppingBagOutlinedIcon />}
          //   loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          ADD TO BAG
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
