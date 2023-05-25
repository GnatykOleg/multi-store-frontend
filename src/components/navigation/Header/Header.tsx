import { useLocation } from "react-router-dom";

import SmallNavigation from "../MobileNavigation/MobileNavigation";
import FullNavigation from "../FullNavigation/FullNavigation";
import Logo from "../Logo/Logo";

import { Toolbar, useMediaQuery } from "@mui/material";

import { activeLink, inactiveLink } from "../styles";

import { BREAKPOINTS } from "../../../helpers/constants/theme-constants";

import * as Styled from "./Header.styled";

const { MIN_DESKTOP, MAX_TABLET } = BREAKPOINTS;

const Header = () => {
  const maxTabletWidth = useMediaQuery(`(max-width:${MAX_TABLET})`);

  const minDesktopWidth = useMediaQuery(`(min-width:${MIN_DESKTOP})`);

  const { pathname } = useLocation();

  const isLinkActive = (path: string) =>
    pathname === path ? activeLink : inactiveLink;

  return (
    <>
      <Styled.MyHeader position="relative">
        <nav>
          <Toolbar component="ul">
            <Logo />

            {maxTabletWidth && <SmallNavigation isLinkActive={isLinkActive} />}

            {minDesktopWidth && <FullNavigation isLinkActive={isLinkActive} />}
          </Toolbar>
        </nav>
      </Styled.MyHeader>
    </>
  );
};

export default Header;
