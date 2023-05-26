import { nanoid } from "@reduxjs/toolkit";

import { getAllCompaniesSelector } from "../../../redux/companies/companiesSelectors";

import { useAppSelector } from "../../../helpers/hooks/redux-hooks";

import { getCartDataSelector } from "../../../redux/cart/cartSelectors";

import { ICompaniesItemsProps } from "../../../types/components/components-types";

import {
  BORDER,
  BOX_SHADOW,
  COLOR,
} from "../../../helpers/constants/theme-constants";

import * as Styled from "./CompaniesItem.styled";

const CompaniesItem = ({
  currentCompanyId,
  handleItemClick,
}: ICompaniesItemsProps) => {
  const companies = useAppSelector(getAllCompaniesSelector);

  const cart = useAppSelector(getCartDataSelector);

  return (
    <>
      {companies?.map(({ logo, company_name, _id }) => {
        const isCompanyInCart = cart.find(
          ({ company_id }) => company_id === _id
        );

        const isCompanyActive =
          currentCompanyId === _id || isCompanyInCart?.company_id === _id;

        const myItemStyles = {
          border: isCompanyActive ? BORDER.PRIMARY : BORDER.SECONDARY,
          boxShadow: isCompanyActive ? BOX_SHADOW.PRIMARY : null,
        };

        const myTypographyStyles = {
          color: isCompanyActive ? COLOR.PRIMARY : COLOR.SECONDARY,
        };

        return (
          <Styled.MyItem
            key={nanoid()}
            onClick={() => handleItemClick(_id)}
            sx={myItemStyles}
          >
            <Styled.MyImageWrapper>
              <Styled.MyImage
                width={110}
                height={110}
                src={logo}
                alt={`Logo ${company_name}`}
              />
            </Styled.MyImageWrapper>

            <Styled.MyTypography as="p" sx={myTypographyStyles}>
              {company_name}
            </Styled.MyTypography>
          </Styled.MyItem>
        );
      })}
    </>
  );
};

export default CompaniesItem;
