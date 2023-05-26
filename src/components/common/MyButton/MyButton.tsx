import { IMyButtonProps } from "../../../types/components/components-types";

import * as Styled from "./MyButton.styled";

const MyButton = ({
  text,
  onClick,
  styles = {},
  type = "button",
}: IMyButtonProps) => (
  <Styled.MyButton
    sx={{ "&.MuiButton-root": styles }}
    onClick={onClick}
    variant="outlined"
    type={type}
  >
    {text}
  </Styled.MyButton>
);

export default MyButton;
