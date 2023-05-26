import { styled } from "@mui/system";

import { Box } from "@mui/material";

import { COLOR } from "../../../helpers/constants/theme-constants";

export const MySidebar = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "400px",
  height: "100%",

  background: COLOR.WHITE,
});
