import { styled } from "@mui/system";

import { AppBar } from "@mui/material";

import { SPACING, COLOR } from "../../../helpers/constants/theme-constants";

export const MyHeader = styled(AppBar)({
  "&.MuiPaper-root": {
    paddingTop: SPACING.SM,
    paddingBottom: SPACING.SM,

    background: COLOR.WHITE,
  },
});
