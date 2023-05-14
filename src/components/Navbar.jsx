import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Switch,
  styled,
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";

const Navbar = ({ mode, setMode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography>🌟 Redefine status</Typography>
        <Stack direction={"row"} alignItems={"center"}>
          {mode === "light" ? <LightMode /> : <DarkMode />}
          <Switch
            onChange={() => setMode(mode === "light" ? "dark" : "light")}
          />
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
