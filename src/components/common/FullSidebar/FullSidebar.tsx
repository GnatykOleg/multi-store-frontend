import { IChildrenProps } from "../../../types/components/components-types";

import * as Styled from "./FullSidebar.styled";

const FullSidebar = ({ children }: IChildrenProps) => (
  <Styled.MySidebar>{children}</Styled.MySidebar>
);

export default FullSidebar;
