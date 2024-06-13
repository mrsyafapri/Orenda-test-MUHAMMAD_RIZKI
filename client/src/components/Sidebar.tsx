import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  IconButton,
  ListItemIcon,
  Box,
  useTheme,
  Theme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import BoxIcon from "@mui/icons-material/Inbox";

interface SidebarProps {
  open: boolean;
  handleDrawerToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerToggle }) => {
  const theme: Theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 240 : 80,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: open ? 240 : 80,
          boxSizing: "border-box",
          backgroundColor: "#D22B2B",
          color: "#fff",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "space-between" : "center",
          padding: "0 8px",
          ...theme.mixins.toolbar,
        }}
      >
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
          <MenuIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          sx={{ justifyContent: open ? "initial" : "center" }}
        >
          <ListItemIcon
            sx={{ color: "#fff", minWidth: 0, justifyContent: "center" }}
          >
            <BoxIcon />
          </ListItemIcon>
          {open && (
            <ListItemText primary="Customer" sx={{ marginLeft: "16px" }} />
          )}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
