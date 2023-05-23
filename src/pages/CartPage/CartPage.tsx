import { Container, Typography } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { Section } from "../../components";

const CartPage = () => (
  <Section>
    <Typography variant="h2" component={"h2"} sx={visuallyHidden}>
      Cart page
    </Typography>

    <Container fixed></Container>
  </Section>
);

export default CartPage;
