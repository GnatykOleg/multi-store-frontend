import { CardContent } from "@mui/material";

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
    <CardContent>
      <Styled.MyIconButton onClick={sidebarHandler} aria-label="close sidebar">
        <Styled.MyCloseIcon />
      </Styled.MyIconButton>

      {children}
    </CardContent>
  </Styled.MyDrawer>
);
export default MobileSidebar;
