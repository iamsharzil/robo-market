import { NextPage } from "next";

import { Box, Container } from "@mui/material";

import { Filter } from "@features/filter";
import { ProductGrid } from "@features/product-grid";

import Layout from "@components/Layout";

import { ProductProvider } from "@provider/product";

const IndexPage: NextPage = () => (
  <Layout>
    <Container sx={{ mt: 5 }}>
      <ProductProvider>
        <Filter />
        <Box mt={5} />
        <ProductGrid />
      </ProductProvider>
    </Container>
  </Layout>
);

export default IndexPage;
