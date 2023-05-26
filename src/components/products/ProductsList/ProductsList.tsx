import { Grid } from "@mui/material";

import { useAppSelector } from "../../../helpers/hooks/redux-hooks";

import { getProductsLoadingStatusSelector } from "../../../redux/products/productsSelectors";

import { IProductsListProps } from "../../../types/components/components-types";

import Loader from "../../common/Loader/Loader";
import MyTitle from "../../common/MyTitle/MyTitle";
import ProductsItem from "../ProductsItem/ProductsItem";

import { SPACING } from "../../../helpers/constants/theme-constants";

import * as Styled from "./ProductsList.styled";

export const ProductsList = ({ products }: IProductsListProps) => {
  const loading = useAppSelector(getProductsLoadingStatusSelector);

  const titleText = products
    ? "Products:"
    : "To display a list of products, select a store.";

  if (loading) return <Loader />;

  return (
    <Styled.MyProductsWrapper>
      <MyTitle text={titleText} as="h3" variant="h5" />

      <Grid container spacing={2} component="ul" sx={{ marginTop: SPACING.MD }}>
        <ProductsItem products={products} />
      </Grid>
    </Styled.MyProductsWrapper>
  );
};

export default ProductsList;
