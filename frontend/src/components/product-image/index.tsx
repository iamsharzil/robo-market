import Image, { ImageProps } from "next/image";

import { Box } from "@mui/material";

export const ProductImage = ({
  width = 120,
  height = 120,
  src,
}: ImageProps) => {
  return (
    <Box width={width} height={height} mx={"auto"} position={"relative"}>
      <Image src={src} alt="..." layout="fill" />
    </Box>
  );
};
