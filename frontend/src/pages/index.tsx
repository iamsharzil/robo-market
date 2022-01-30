import { NextPage } from "next";
import { ProductGrid } from "src/features/product-grid";

import { Container } from "@mui/material";

import Layout from "@components/Layout";

const IndexPage: NextPage = () => (
  <Layout>
    <Container sx={{ mt: 5 }}>
      <ProductGrid />
    </Container>
  </Layout>
);

export default IndexPage;
