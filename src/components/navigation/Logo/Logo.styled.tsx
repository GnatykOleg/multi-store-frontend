import { styled } from "@mui/system";

import { NavLink } from "react-router-dom";

import LocalMallIcon from "@mui/icons-material/LocalMall";

import {
  COLOR,
  FONT_SIZE,
  SPACING,
  FONT_WEIGHT,
} from "../../../helpers/constants/theme-constants";

export const MyItem = styled("li")({
  marginRight: "auto",
});

export const MyNavLink = styled(NavLink)({
  display: "flex",
  alignItems: "center",

  color: COLOR.PRIMARY,

  fontSize: FONT_SIZE.MD,
  fontWeight: FONT_WEIGHT.SEMI_BOLD,
});

export const MyIcon = styled(LocalMallIcon)({
  marginRight: SPACING.SM,

  color: COLOR.PRIMARY,
  fontSize: FONT_SIZE.XL,
});
