import { styled } from "@mui/system";

import { Box, Typography } from "@mui/material";

import {
  SPACING,
  BORDER,
  FONT_SIZE,
  FONT_WEIGHT,
  BOX_SHADOW,
  TRANSITION,
} from "../../../helpers/constants/theme-constants";

export const MyItem = styled("li")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: SPACING.SM,

  width: "100%",

  borderRadius: BORDER.RADIUS,

  transition: TRANSITION.PRIMARY,

  cursor: "pointer",

  "&:not(:last-child)": {
    marginBottom: SPACING.MD,
  },

  "&:hover, &:focus": {
    boxShadow: BOX_SHADOW.PRIMARY,
  },
});

export const MyImageWrapper = styled(Box)({
  marginBottom: SPACING.SM,

  width: "110px",
  height: "110px",

  overflow: "hidden",

  display: "flex",
  alignItems: "center",
});

export const MyImage = styled("img")({
  objectFit: "cover",
});

export const MyTypography = styled(Typography)({
  width: "100%",

  fontSize: FONT_SIZE.MD,
  fontWeight: FONT_WEIGHT.SEMI_BOLD,

  textAlign: "center",
});
