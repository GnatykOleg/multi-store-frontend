import { NavLink } from "react-router-dom";

import { ROUTES_PATHS } from "../../../helpers/constants/routes-constants";

import * as Styled from "./Logo.styled";

const { SHOP_PAGE } = ROUTES_PATHS;

const Logo = () => (
  <Styled.MyItem>
    <NavLink aria-label="Store icon, link to homepage." to={SHOP_PAGE}>
      <Styled.MyIcon />
    </NavLink>
  </Styled.MyItem>
);

export default Logo;
