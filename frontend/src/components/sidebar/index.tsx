import { useState } from "react";

import { Badge, Drawer, IconButton } from "@mui/material";

import { CartInfo } from "@features/cart";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useCart } from "@provider/cart";

export const Sidebar = () => {
  const { totalQty } = useCart();

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
        <Badge badgeContent={totalQty} color="secondary">
          <ShoppingBagOutlinedIcon />
        </Badge>
      </IconButton>
      <Drawer anchor={"right"} open={state} onClose={() => toggleDrawer(false)}>
        <CartInfo />
      </Drawer>
    </>
  );
};
