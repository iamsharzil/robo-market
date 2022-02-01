import { useRouter } from "next/router";

import { Box, Grid } from "@mui/material";

import { ProductItem } from "@components/product-item";

import { useProducts } from "@provider/product";

import { ProductItemType } from "@interfaces/index";

export const ProductGrid = () => {
  const items = useProducts();
  const router = useRouter();

  const { material } = router.query;

  const filteredItems = material
    ? items.filter((item) => item.material === material)
    : items;

  return (
    <Box flexGrow={1}>
      <Grid container spacing={[2, 3]} columns={[4, 8, 12]}>
        {filteredItems.map((item: ProductItemType, i: number) => (
          <Grid item xs={2} sm={3} md={3} key={item.createdAt.toString()}>
            <ProductItem item={{ ...item, id: i }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
