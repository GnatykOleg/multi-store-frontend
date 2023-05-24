export const COLOR = Object.freeze({
  PRIMARY: "#7EB101",

  SECONDARY: "#696969",

  WHITE: "#FEFEFE",
});

export const TRANSITION = Object.freeze({
  PRIMARY: "all 400ms linear",
});

export const BOX_SHADOW = Object.freeze({
  PRIMARY: "1px 1px 5px 1px #000000",
});

export const BORDER = Object.freeze({
  PRIMARY: `1px solid ${COLOR.PRIMARY}`,
  SECONDARY: `1px solid ${COLOR.SECONDARY}`,
});

export const FONT_WEIGHT = Object.freeze({
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
});

export const FONT_SIZE = Object.freeze({
  SM: "16px",
  MD: "20px",
  LG: "25px",
  XL: "36px",
});

export const SPACING = Object.freeze({
  SM: "0.5rem",
  MD: "1rem",
  LG: "1.rem",
  XL: "2rem",
  XXL: "3rem",
});

export const BREAKPOINTS = Object.freeze({
  MIN_MOBILE: "320px",
  MAX_MOBILE: "767px",

  MIN_TABLET: "768px",
  MAX_TABLET: "1199px",

  MIN_DESKTOP: "1200px",
});
