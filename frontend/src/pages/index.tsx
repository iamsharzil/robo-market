import { NextPage } from "next";

import { Container } from "@mui/material";

import { ProductGrid } from "@features/product-grid";

import Layout from "@components/Layout";

const IndexPage: NextPage = () => (
  <Layout>
    <Container sx={{ mt: 5 }}>
      <ProductGrid />
    </Container>
  </Layout>
);

export default IndexPage;
