import { AppBar, Toolbar, Typography } from "@mui/material";

import { Sidebar } from "@components/sidebar";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" flexGrow={1}>
          Home
        </Typography>
        <Sidebar />
      </Toolbar>
    </AppBar>
  );
};
