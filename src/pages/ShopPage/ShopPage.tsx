import { useEffect, useState } from "react";

import { useMediaQuery } from "@mui/material";

import {
  useAppDispatch,
  useAppSelector,
} from "../../helpers/hooks/redux-hooks";

import { getAllCompaniesOperation } from "../../redux/companies/companiesOperations";

import { getProductsForCompanySelector } from "../../redux/products/productsSelectors";

import {
  MobileSidebar,
  FullSidebar,
  ProductsList,
  MyTitle,
  CompaniesList,
  MyButton,
  MySection,
} from "../../components";

import { BREAKPOINTS } from "../../helpers/constants/theme-constants";

import * as Styled from "./ShopPage.styled";

const { MIN_DESKTOP, MAX_TABLET } = BREAKPOINTS;

const ShopPage = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCompaniesOperation());
  }, [dispatch]);

  const products = useAppSelector(getProductsForCompanySelector);

  const maxTabletWidth = useMediaQuery(`(max-width:${MAX_TABLET})`);

  const minDesktopWidth = useMediaQuery(`(min-width:${MIN_DESKTOP})`);

  const sidebarHandler = () => setIsSideBarOpen(state => !state);

  return (
    <Styled.MyMain>
      <MyTitle text="Main page" as="h1" hidden />

      {maxTabletWidth && (
        <>
          <MySection>
            <MyTitle text="Hero section" as="h2" hidden />
            <MyButton
              onClick={sidebarHandler}
              text="Show companies list"
              styles={{ margin: "0 auto" }}
            />
          </MySection>

          <MobileSidebar
            isSideBarOpen={isSideBarOpen}
            sidebarHandler={sidebarHandler}
          >
            <CompaniesList />
          </MobileSidebar>
        </>
      )}

      {minDesktopWidth && (
        <MySection>
          <MyTitle text="Left sidebar with companies" as="h2" hidden />
          <FullSidebar>
            <CompaniesList />
          </FullSidebar>
        </MySection>
      )}

      <MySection styles={{ width: "100%" }}>
        <MyTitle text="List of products section" as="h2" hidden />
        <ProductsList products={products} />
      </MySection>
    </Styled.MyMain>
  );
};

export default ShopPage;
