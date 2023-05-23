import { Container, Typography } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { Section } from "../../components";

const ShopPage = () => (
  <main>
    <Section>
      <Typography variant="h2" component={"h1"} sx={visuallyHidden}>
        Page not found
      </Typography>
      <Container fixed></Container>
    </Section>
  </main>
);

export default ShopPage;
