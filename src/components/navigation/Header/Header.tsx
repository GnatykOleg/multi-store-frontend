import { useLocation } from "react-router-dom";

import SmallNavigation from "../SmallNavigation/SmallNavigation";
import FullNavigation from "../FullNavigation/FullNavigation";
import Logo from "../Logo/Logo";

import { Toolbar, useMediaQuery } from "@mui/material";

import { activeLink, inactiveLink } from "../styles";

import { BREAKPOINTS } from "../../../helpers/constants/theme-constants";

import * as Styled from "./Header.styled";

const { MAX_MOBILE, MIN_TABLET } = BREAKPOINTS;

const Header = () => {
  const isMobile = useMediaQuery(`(max-width:${MAX_MOBILE})`);

  const isTablet = useMediaQuery(`(min-width:${MIN_TABLET})`);

  const { pathname } = useLocation();

  const isLinkActive = (path: string) =>
    pathname === path ? activeLink : inactiveLink;

  return (
    <>
      <Styled.MyHeader position="relative">
        <nav>
          <Toolbar component="ul">
            <Logo />

            {isMobile && <SmallNavigation isLinkActive={isLinkActive} />}

            {isTablet && <FullNavigation isLinkActive={isLinkActive} />}
          </Toolbar>
        </nav>
      </Styled.MyHeader>
    </>
  );
};

export default Header;
