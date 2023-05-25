import { IFullSidebarProps } from "../../../types/components/components-types";

import MyTitle from "../MyTitle/MyTitle";

import * as Styled from "./FullSidebar.styled";

const FullSidebar = ({ children }: IFullSidebarProps) => (
  <Styled.MySidebar>
    <MyTitle text="Left sidebar with companies" as="h2" hidden />
    {children}
  </Styled.MySidebar>
);

export default FullSidebar;
