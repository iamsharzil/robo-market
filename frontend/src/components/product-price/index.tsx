import { Typography } from "@mui/material";

import { convertAmountToBaht } from "@utils/index";

import theme from "@shared/theme";

type ProductPriceType = {
  discountPrice: string;
  originalPrice?: string;
};
export const ProductPrice = ({
  discountPrice,
  originalPrice,
}: ProductPriceType) => {
  const originalPriceInBaht = convertAmountToBaht(+discountPrice);
  const discountPriceInBaht = convertAmountToBaht(+discountPrice);

  return (
    <>
      <Typography
        variant="body2"
        color={theme.palette.secondary.main}
        fontWeight={"bold"}
      >
        {discountPriceInBaht}
      </Typography>

      {originalPrice && (
        <Typography
          variant="body2"
          color={theme.palette.secondary.main}
          ml={1}
          sx={{
            textDecoration: "line-through",
          }}
        >
          {originalPriceInBaht}
        </Typography>
      )}
    </>
  );
};
