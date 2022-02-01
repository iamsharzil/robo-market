import { useContext, createContext, ReactNode } from "react";

import { Box, Skeleton } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";

import { BASE_API } from "@config/index";

import { ProductItemListType } from "@interfaces/index";

const ProductState = createContext<ProductItemListType>([]);

const fetchProductList = () => axios.get(`${BASE_API}/robots`);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading, isError, data, error } = useQuery(
    "robots",
    fetchProductList
  );

  if (isLoading) {
    return (
      <>
        <Box display={"flex"} justifyContent={"end"} p={2}>
          <Skeleton variant="rectangular" width={100} height={50} />
        </Box>
        <Box display={"flex"} flexWrap={"wrap"}>
          {[...Array(10)].map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={270}
              height={270}
              sx={{
                m: 1,
              }}
            />
          ))}
        </Box>
      </>
    );
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>;
  }

  const items: ProductItemListType = data?.data?.data;

  return (
    <ProductState.Provider value={items}>{children}</ProductState.Provider>
  );
};

export const useProducts = () => useContext(ProductState);
