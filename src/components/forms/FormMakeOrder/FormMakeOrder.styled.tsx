import { styled } from "@mui/system";

import {
  SPACING,
  BORDER,
  BOX_SHADOW,
} from "../../../helpers/constants/theme-constants";

export const MyForm = styled("form")({
  display: "flex",
  flexDirection: "column",

  padding: SPACING.XL,

  height: "789px",

  border: BORDER.SECONDARY,

  borderRadius: BORDER.RADIUS,

  boxShadow: BOX_SHADOW.PRIMARY,

  "& > div": {
    marginBottom: SPACING.XL,
  },
});
