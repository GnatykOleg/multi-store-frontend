import { useState } from "react";

import { NavLink } from "react-router-dom";

import { Button, MenuItem } from "@mui/material";

import { IMobileNavigationProps } from "../../../types/components/components-types";

import { navigationItems } from "../navigationItems";

import * as Styled from "./MobileNavigation.styled";
import { nanoid } from "@reduxjs/toolkit";

const MobileNavigation = ({ isLinkActive }: IMobileNavigationProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = navigationItems.map(({ text, to }) => (
    <MenuItem key={nanoid()}>
      <Button
        fullWidth
        onClick={handleClose}
        component={NavLink}
        to={to}
        sx={isLinkActive(to)}
      >
        {text}
      </Button>
    </MenuItem>
  ));

  return (
    <li>
      <Styled.MyButton
        id="basic-button"
        aria-controls={open ? "navigation-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Menu
      </Styled.MyButton>

      <Styled.MyMenu
        id="navigation-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItems}
      </Styled.MyMenu>
    </li>
  );
};

export default MobileNavigation;
