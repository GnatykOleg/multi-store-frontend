import { styled } from "@mui/system";

import LocalMallIcon from "@mui/icons-material/LocalMall";

import { COLOR, FONT_SIZE } from "../../../helpers/constants/theme-constants";

export const MyItem = styled("li")({
  marginRight: "auto",
});

export const MyIcon = styled(LocalMallIcon)({
  color: COLOR.PRIMARY,
  fontSize: FONT_SIZE.XL,
});
