import { Box, Grid } from "@mui/material";

import { ProductItem } from "@components/product-item";

export const ProductGrid = () => {
  return (
    <Box flexGrow={1}>
      <Grid container spacing={[2, 3]} columns={[4, 8, 12]}>
        {Array.from(Array(8)).map((_, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <ProductItem />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
