import { styled } from "@mui/system";

import { Box, Typography } from "@mui/material";

import {
  SPACING,
  BORDER,
  FONT_SIZE,
  FONT_WEIGHT,
  BOX_SHADOW,
  TRANSITION,
  COLOR,
} from "../../../helpers/constants/theme-constants";

import backgroundImage from "../../../assets/images/ellipse.webp";

export const MyItem = styled("li")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: SPACING.SM,

  width: "100%",

  borderRadius: BORDER.RADIUS,

  transition: TRANSITION.PRIMARY,

  background: COLOR.WHITE,

  cursor: "pointer",

  backgroundImage: `url(${backgroundImage})`,

  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",

  "&:not(:last-child)": {
    marginBottom: SPACING.MD,
  },

  "&:hover, &:focus": {
    border: BORDER.PRIMARY,
    boxShadow: BOX_SHADOW.PRIMARY,
  },

  "&:hover > p, &:focus > p": {
    color: COLOR.PRIMARY,
  },
});

export const MyImageWrapper = styled(Box)({
  marginBottom: SPACING.SM,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "150px",
  height: "150px",
});

export const MyImage = styled("img")({
  objectFit: "cover",
});

export const MyTypography = styled(Typography)({
  fontSize: FONT_SIZE.MD,
  fontWeight: FONT_WEIGHT.SEMI_BOLD,

  textAlign: "center",

  transition: TRANSITION.PRIMARY,
});
