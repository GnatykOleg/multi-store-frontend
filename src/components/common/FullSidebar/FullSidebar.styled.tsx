import { styled } from "@mui/system";

import { SPACING, COLOR } from "../../../helpers/constants/theme-constants";

export const MySidebar = styled("section")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "400px",

  background: COLOR.WHITE,

  padding: SPACING.XL,
});
