import { Typography } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { Container } from "@mui/material";

import { MySection } from "../../components";

import image from "../../assets/images/page-not-found.png";

const PageNotFound = () => {
  return (
    <MySection>
      <Typography variant="h1" component={"h2"} sx={visuallyHidden}>
        Page not found
      </Typography>

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
