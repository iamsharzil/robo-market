import { useState } from "react";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Button, Drawer, IconButton } from "@mui/material";

export const Sidebar = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (state: boolean) => setState(state);

  return (
    <>
      <Button onClick={() => toggleDrawer(!state)}>
        <IconButton
          size="large"
          edge="start"
          aria-label="cart"
          sx={{ color: "#fff" }}
        >
          <ShoppingBagOutlinedIcon />
        </IconButton>
      </Button>
      <Drawer anchor={"right"} open={state} onClose={() => toggleDrawer(false)}>
        Content
      </Drawer>
    </>
  );
};
