import { useState } from "react";

import { useAppSelector } from "../../helpers/hooks/redux-hooks";

import { getCartDataSelector } from "../../redux/cart/cartSelectors";

import {
  ProductsList,
  MyTitle,
  MySection,
  FormMakeOrder,
  MyButton,
  MobileSidebar,
  FullSidebar,
} from "../../components";

import { useMediaQuery } from "@mui/material";

import { BREAKPOINTS } from "../../helpers/constants/theme-constants";

import * as Styled from "./CartPage.styled";

const { MIN_DESKTOP, MAX_TABLET } = BREAKPOINTS;

const CartPage = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const cart = useAppSelector(getCartDataSelector);

  const sidebarHandler = () => setIsSideBarOpen(state => !state);

  const maxTabletWidth = useMediaQuery(`(max-width:${MAX_TABLET})`);

  const minDesktopWidth = useMediaQuery(`(min-width:${MIN_DESKTOP})`);

  return (
    <Styled.MyPageWrapper>
      {cart.length > 0 && maxTabletWidth && (
        <>
          <MySection>
            <MyTitle text="Hero section" as="h2" hidden />
            <MyButton
              onClick={sidebarHandler}
              text="Show dialog to make order"
              styles={{ margin: "0 auto" }}
            />
          </MySection>

          <MobileSidebar
            isSideBarOpen={isSideBarOpen}
            sidebarHandler={sidebarHandler}
          >
            <FormMakeOrder />
          </MobileSidebar>
        </>
      )}

      {cart.length > 0 && minDesktopWidth && (
        <MySection>
          <MyTitle text="Left sidebar make order form" as="h2" hidden />
          <FullSidebar>
            <FormMakeOrder />
          </FullSidebar>
        </MySection>
      )}

      {cart.length > 0 && (
        <MySection styles={{ width: "100%" }}>
          <MyTitle text="Cart product list" as="h2" hidden />
          <ProductsList products={cart} />
        </MySection>
      )}

      {cart.length === 0 && (
        <MySection styles={{ width: "100%" }}>
          <MyTitle text="Your cart is currently empty😔" as="h2" variant="h2" />
        </MySection>
      )}
    </Styled.MyPageWrapper>
  );
};

export default CartPage;
