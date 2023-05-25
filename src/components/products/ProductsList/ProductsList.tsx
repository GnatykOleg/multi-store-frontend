import { useAppSelector } from "../../../helpers/hooks/redux-hooks";

import { getProductsLoadingStatusSelector } from "../../../redux/products/productsSelectors";

import { IChildrenProps } from "../../../types/components/components-types";

import Loader from "../../common/Loader/Loader";

import MyTitle from "../../common/MyTitle/MyTitle";

import { SPACING } from "../../../helpers/constants/theme-constants";

import * as Styled from "./ProductsList.styled";

export const ProductsList = ({ children }: IChildrenProps) => {
  const loading = useAppSelector(getProductsLoadingStatusSelector);

  if (loading) return <Loader />;

  const itemTitleStyles = { marginBottom: SPACING.MD };

  return (
    <Styled.MyList>
      <li style={itemTitleStyles}>
        <MyTitle text="Products:" as="h3" variant="h5" />
      </li>

      {children}
    </Styled.MyList>
  );
};

export default ProductsList;
