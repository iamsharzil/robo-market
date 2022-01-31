import { useState } from "react";

import { Drawer, IconButton } from "@mui/material";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { CartInfo } from "@features/cart";

export const Sidebar = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (state: boolean) => setState(state);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="cart"
        sx={{ color: "#fff" }}
        onClick={() => toggleDrawer(!state)}
      >
        <ShoppingBagOutlinedIcon />
      </IconButton>
      <Drawer anchor={"right"} open={state} onClose={() => toggleDrawer(false)}>
        <CartInfo />
      </Drawer>
    </>
  );
};
