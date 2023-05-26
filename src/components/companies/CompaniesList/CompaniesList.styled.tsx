import { styled } from "@mui/system";

import {
  SPACING,
  BORDER,
  BOX_SHADOW,
} from "../../../helpers/constants/theme-constants";

export const MyList = styled("ul")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: SPACING.MD,

  height: "789px",

  overflow: "auto",

  border: BORDER.SECONDARY,

  borderRadius: BORDER.RADIUS,

  boxShadow: BOX_SHADOW.PRIMARY,
});
