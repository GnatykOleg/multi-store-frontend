import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { Section } from "../../components";

import image from "../../assets/images/page-not-found.png";

import * as Styled from "./NotFoundPage.styled";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Section>
      <Typography variant="h1" component={"h2"} sx={visuallyHidden}>
        Page not found
      </Typography>

      <Styled.MyContainer fixed>
        <Styled.MyImage
          src={image}
          alt="Page not found"
          width={500}
          loading="lazy"
        />

        <Button onClick={goBack} variant="contained">
          Go back
        </Button>
      </Styled.MyContainer>
    </Section>
  );
};

export default PageNotFound;
