import { NavLink } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import { Button } from "@mui/material";

import { IFullNavigationProps } from "../../../types/common/components/components-types";

import { SPACING } from "../../../helpers/constants/theme-constants";

import { navigationItems } from "../navigationItems";

const FullNavigation = ({ isLinkActive }: IFullNavigationProps) => {
  const notLastChildMarginRight = (index: number) => {
    const lastElementIndex = navigationItems.length - 1;

    const marginRight = { marginRight: SPACING.MD };

    return index !== lastElementIndex && marginRight;
  };

  return (
    <>
      {navigationItems.map(({ text, to }, index) => (
        <li key={nanoid()}>
          <Button
            component={NavLink}
            to={to}
            sx={{
              ...isLinkActive(to),
              ...notLastChildMarginRight(index),
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
