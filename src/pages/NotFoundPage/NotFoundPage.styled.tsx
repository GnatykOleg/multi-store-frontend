import { Container, styled } from "@mui/system";

import { SPACING } from "../../helpers/constants/theme-constants";

export const MyContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const MyImage = styled("img")({
  marginBottom: SPACING.XL,
});
