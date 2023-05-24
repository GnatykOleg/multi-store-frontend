import { styled } from "@mui/system";

import { Button, Menu } from "@mui/material";

import { BORDER, COLOR } from "../../../helpers/constants/theme-constants";

import { linkStyles } from "../styles";

export const MyMenu = styled(Menu)({
  "&.MuiPopover-root": {
    zIndex: 999999,
  },
});

export const MyButton = styled(Button)({
  ...linkStyles,
  color: COLOR.PRIMARY,
  border: BORDER.PRIMARY,
});
