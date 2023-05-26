import styled from "@emotion/styled";

import { Box, Drawer, IconButton } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";

import {
  COLOR,
  TRANSITION,
  SPACING,
} from "../../../helpers/constants/theme-constants";

export const MyDrawer = styled(Drawer)({
  "& .MuiPaper-root": {
    minWidth: "320px",

    display: "flex",
    flexDirection: "column",
  },
});

export const MyBox = styled(Box)({
  height: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  padding: SPACING.LG,
});

export const MyIconButton = styled(IconButton)({
  position: "absolute",
  top: 0,
  left: 0,
});

export const MyCloseIcon = styled(CancelIcon)({
  color: COLOR.SECONDARY,
  transition: TRANSITION.PRIMARY,
});
