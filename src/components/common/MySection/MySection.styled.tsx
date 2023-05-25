import { styled } from "@mui/system";

import { SPACING } from "../../../helpers/constants/theme-constants";

export const MySection = styled("section")({
  minHeight: "calc(100vh - 80px)",

  paddingTop: SPACING.XL,
  paddingBottom: SPACING.XL,
});
