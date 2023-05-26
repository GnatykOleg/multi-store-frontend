import { useEffect, useState } from "react";

import { getProductsForCompanyOperation } from "../../../redux/products/productsOperations";

import { getCartDataSelector } from "../../../redux/cart/cartSelectors";

import { getCompaniesLoadingStatusSelector } from "../../../redux/companies/companiesSelectors";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../helpers/hooks/redux-hooks";

import MyTitle from "../../common/MyTitle/MyTitle";
import Loader from "../../common/Loader/Loader";
import CompaniesItem from "../CompaniesItem/CompaniesItem";

import { SPACING } from "../../../helpers/constants/theme-constants";

import { toast } from "react-toastify";

import * as Styled from "./CompaniesList.styled";

const CompaniesList = () => {
  const [currentCompanyId, setCurrentCompanyId] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentCompanyId) {
      dispatch(getProductsForCompanyOperation(currentCompanyId));
    }
  }, [dispatch, currentCompanyId]);

  const loading = useAppSelector(getCompaniesLoadingStatusSelector);

  const cart = useAppSelector(getCartDataSelector);

  const handleItemClick = (companyIdFromItem: string) => {
    const productInCart = cart.find(
      ({ company_id }) => company_id === companyIdFromItem
    );

    if (cart.length > 0 && productInCart?.company_id !== companyIdFromItem)
      return toast.warn(
        `You have already started to place an order in another store`
      );

    setCurrentCompanyId(companyIdFromItem);
  };

  if (loading) return <Loader />;

  const itemTitleStyles = { marginBottom: SPACING.MD };

  return (
    <Styled.MyList>
      <li style={itemTitleStyles}>
        <MyTitle text="Shops:" as="h3" variant="h5" />
      </li>

      <CompaniesItem
        handleItemClick={handleItemClick}
        currentCompanyId={currentCompanyId}
      />
    </Styled.MyList>
  );
};

export default CompaniesList;
