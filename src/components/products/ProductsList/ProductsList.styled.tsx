import { styled } from "@mui/system";

import {
  SPACING,
  BORDER,
  COLOR,
  BOX_SHADOW,
} from "../../../helpers/constants/theme-constants";

import backgroundImage from "../../../assets/images/products-bg.webp";

export const MyList = styled("ul")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: SPACING.MD,

  height: "683px",

  overflow: "auto",

  background: COLOR.WHITE,

  border: BORDER.SECONDARY,

  borderRadius: BORDER.RADIUS,

  boxShadow: BOX_SHADOW.PRIMARY,

  "@media screen and (min-width:1200px)": {
    height: "789px",
  },

  backgroundImage: `url(${backgroundImage})`,

  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
});
