import { styled } from "@mui/system";

import { SPACING } from "../../helpers/constants/theme-constants";
import { Container } from "@mui/material";

export const MyContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: SPACING.XL,

  height: "calc(100vh - 80px)",
});
