import { useState } from "react";

import { useRouter } from "next/router";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import { useProducts } from "@provider/product";

export const Filter = () => {
  const router = useRouter();
  const items = useProducts();

  // FILTER UNIQUE MATERIALS
  // CAN BE DONE VIA API CALL IN REAL WORLD PROJECTS
  const uniqueMaterials: string[] = [
    ...new Set(items.map((item) => item.material)),
  ];

  const [material, setMaterial] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setMaterial(event.target.value as string);
    router.push(`?material=${event.target.value}`);
  };

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"end"}>
      <Typography variant="h6" fontWeight={"bold"} mr={2}>
        Filter:
      </Typography>

      <Box maxWidth={120} flexGrow={1}>
        <FormControl fullWidth>
          <InputLabel id="material">Material</InputLabel>
          <Select
            labelId="material"
            id="filter-by-material"
            value={material}
            label="Material"
            onChange={handleChange}
          >
            {uniqueMaterials.map((material) => (
              <MenuItem key={material} value={material}>
                {material}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
