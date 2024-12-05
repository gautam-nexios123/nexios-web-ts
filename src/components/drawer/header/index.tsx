import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Profile from "./profile/Index";
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ handleDrawerOpen }: any) => {
  return (
    <Toolbar
      sx={{
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ width: "0px" }}
      >
        <MenuIcon className="text-[#399EFD] text-[30px]"/>
      </IconButton>
      <div className="flex items-center gap-8 ">
        <Profile />
      </div>
    </Toolbar>
  );
};

export default Header;
