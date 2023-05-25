import { MyTitle } from "../../components";

import image from "../../assets/images/page-not-found.png";

import * as Styled from "./NotFoundPage.styled";

const PageNotFound = () => (
  <>
    <MyTitle text="Page not found" as="h2" hidden />

    <Styled.MyContainer fixed>
      <img src={image} alt="Page not found" width={500} loading="lazy" />
    </Styled.MyContainer>
  </>
);
export default PageNotFound;
