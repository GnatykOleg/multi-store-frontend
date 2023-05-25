import { NavLink } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import { Button } from "@mui/material";

import { INavigationProps } from "../../../types/components/components-types";

import { SPACING } from "../../../helpers/constants/theme-constants";

import { navigationItems } from "../navigationItems";

const FullNavigation = ({ isLinkActive }: INavigationProps) => {
  return (
    <>
      {navigationItems.map(({ text, to }, index, array) => (
        <li key={nanoid()}>
          <Button
            component={NavLink}
            to={to}
            sx={{
              ...isLinkActive(to),
              marginRight: index !== array.length - 1 ? SPACING.MD : 0,
            }}
          >
            {text}
          </Button>
        </li>
      ))}
    </>
  );
};

export default FullNavigation;
