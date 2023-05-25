import { nanoid } from "@reduxjs/toolkit";

import { BORDER, COLOR } from "../../../helpers/constants/theme-constants";

import { ICompaniesItemsProps } from "../../../types/components/components-types";

import * as Styled from "./CompaniesItem.styled";

const CompaniesItem = ({
  companies,
  companyId,
  handleItemClick,
}: ICompaniesItemsProps) => (
  <>
    {companies?.map(({ logo, company_name, _id }) => (
      <Styled.MyItem
        key={nanoid()}
        onClick={() => handleItemClick(_id)}
        sx={{ border: companyId === _id ? BORDER.PRIMARY : BORDER.SECONDARY }}
      >
        <Styled.MyImageWrapper>
          <Styled.MyImage
            width={110}
            height={110}
            src={logo}
            alt={`Logo ${company_name}`}
          />
        </Styled.MyImageWrapper>

        <Styled.MyTypography
          as="h3"
          sx={{ color: companyId === _id ? COLOR.PRIMARY : COLOR.SECONDARY }}
        >
          {company_name}
        </Styled.MyTypography>
      </Styled.MyItem>
    ))}
  </>
);

export default CompaniesItem;
