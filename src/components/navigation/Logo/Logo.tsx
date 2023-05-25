import { Typography } from "@mui/material";

import { ROUTES_PATHS } from "../../../helpers/constants/routes-constants";

import * as Styled from "./Logo.styled";

const { SHOP_PAGE } = ROUTES_PATHS;

const Logo = () => (
  <Styled.MyItem>
    <Styled.MyNavLink aria-label="Store icon, link to homepage." to={SHOP_PAGE}>
      <Styled.MyIcon />
      <Typography variant="h5">Multi Store</Typography>
    </Styled.MyNavLink>
  </Styled.MyItem>
);

export default Logo;
