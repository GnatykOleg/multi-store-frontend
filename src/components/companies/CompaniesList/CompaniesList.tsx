import { getCompaniesLoadingStatusSelector } from "../../../redux/companies/companiesSelectors";

import { useAppSelector } from "../../../helpers/hooks/redux-hooks";

import { ICompaniesListProps } from "../../../types/components/components-types";

import { SPACING } from "../../../helpers/constants/theme-constants";

import MyTitle from "../../common/MyTitle/MyTitle";

import Loader from "../../common/Loader/Loader";

import * as Styled from "./CompaniesList.styled";

const CompaniesList = ({ children }: ICompaniesListProps) => {
  const loading = useAppSelector(getCompaniesLoadingStatusSelector);

  if (loading) return <Loader />;

  const itemTitleStyles = { marginBottom: SPACING.MD };

  return (
    <Styled.MyList>
      <li style={itemTitleStyles}>
        <MyTitle text="Shops:" as="h3" variant="h5" />
      </li>

      {children}
    </Styled.MyList>
  );
};

export default CompaniesList;
