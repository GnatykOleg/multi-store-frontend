import { IMobileSidebarProps } from "../../../types/components/components-types";

import * as Styled from "./MobileSidebar.styles";

const MobileSidebar = ({
  isSideBarOpen,
  sidebarHandler,
  children,
}: IMobileSidebarProps) => (
  <Styled.MyDrawer
    anchor="left"
    open={isSideBarOpen}
    onBackdropClick={sidebarHandler}
    variant="temporary"
  >
    <Styled.MyIconButton onClick={sidebarHandler} aria-label="close sidebar">
      <Styled.MyCloseIcon />
    </Styled.MyIconButton>

    <Styled.MyBox>{children}</Styled.MyBox>
  </Styled.MyDrawer>
);
export default MobileSidebar;
