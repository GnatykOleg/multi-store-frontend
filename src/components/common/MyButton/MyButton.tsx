import { IMyButtonProps } from "../../../types/components/components-types";

import * as Styled from "./MyButton.styled";

const MyButton = ({ text, onClick, styles = {} }: IMyButtonProps) => (
  <Styled.MyButton
    sx={{ "&.MuiButton-root": styles }}
    onClick={onClick}
    variant="outlined"
  >
    {text}
  </Styled.MyButton>
);

export default MyButton;
