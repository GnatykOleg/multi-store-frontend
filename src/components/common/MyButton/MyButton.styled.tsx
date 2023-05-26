import { styled } from "@mui/system";

import { Button } from "@mui/material";

import {
  BORDER,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  TRANSITION,
  BOX_SHADOW,
} from "../../../helpers/constants/theme-constants";

export const MyButton = styled(Button)({
  fontSize: FONT_SIZE.SM,
  fontWeight: FONT_WEIGHT.SEMI_BOLD,

  transition: TRANSITION.PRIMARY,

  "&.MuiButton-root": {
    display: "block",
    border: BORDER.SECONDARY,
    color: COLOR.SECONDARY,
  },

  "&.MuiButton-root:hover": {
    boxShadow: BOX_SHADOW.PRIMARY,
    border: BORDER.PRIMARY,
    color: COLOR.PRIMARY,
  },
});
