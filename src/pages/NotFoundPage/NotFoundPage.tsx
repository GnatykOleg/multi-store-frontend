import { Container } from "@mui/material";

import { MySection, MyTitle } from "../../components";

import image from "../../assets/images/page-not-found.png";

const PageNotFound = () => {
  return (
    <MySection>
      <MyTitle text="Page not found" as="h2" hidden />

      <Container fixed>
        <img
          style={{ margin: "0 auto" }}
          src={image}
          alt="Page not found"
          width={500}
          loading="lazy"
        />
      </Container>
    </MySection>
  );
};

export default PageNotFound;
