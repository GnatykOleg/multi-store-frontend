import styled from "@emotion/styled";

import { Drawer, IconButton } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";

import {
  COLOR,
  TRANSITION,
  SPACING,
} from "../../../helpers/constants/theme-constants";

export const MyDrawer = styled(Drawer)({
  "& .MuiPaper-root": {
    minWidth: "320px",
    paddingTop: SPACING.XXL,
  },
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
