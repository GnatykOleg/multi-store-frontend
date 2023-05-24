import {
  BORDER,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  TRANSITION,
  BOX_SHADOW,
} from "../../helpers/constants/theme-constants";

export const linkStyles = {
  fontSize: FONT_SIZE.SM,
  fontWeight: FONT_WEIGHT.SEMI_BOLD,

  transition: TRANSITION.PRIMARY,

  "&.MuiButton-root:hover": {
    boxShadow: "1px 1px 5px 1px #000000",
  },
};

export const inactiveLink = {
  ...linkStyles,
  border: BORDER.SECONDARY,
  color: COLOR.SECONDARY,
};

export const activeLink = {
  ...linkStyles,
  border: BORDER.PRIMARY,
  color: COLOR.PRIMARY,
};
