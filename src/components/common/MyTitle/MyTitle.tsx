import { Typography } from "@mui/material";

import { visuallyHidden } from "@mui/utils";

import { IMyTitleProps } from "../../../types/components/components-types";

const MyTitle = ({
  hidden = false,
  text,
  as,
  variant = false,
}: IMyTitleProps) => (
  <Typography
    component={as}
    variant={variant || null}
    sx={hidden ? visuallyHidden : null}
    align="center"
  >
    {text}
  </Typography>
);

export default MyTitle;
