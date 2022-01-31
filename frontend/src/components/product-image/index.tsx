import Image from "next/image";

import { Box } from "@mui/material";

type ProductImageTypes = {
  width?: number;
  height?: number;
  src: string;
};

export const ProductImage = ({
  width = 120,
  height = 120,
  src,
}: ProductImageTypes) => {
  const URL = `${src}?size=${width}x${height}`;

  return (
    <Box width={width} height={height} mx={"auto"} position={"relative"}>
      <Image src={URL} alt="..." layout="fill" />
    </Box>
  );
};
