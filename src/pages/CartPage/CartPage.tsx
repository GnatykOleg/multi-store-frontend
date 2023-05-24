import { Container, Typography } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { MySection } from "../../components";

const CartPage = () => (
  <MySection>
    <Typography variant="h2" component={"h2"} sx={visuallyHidden}>
      Cart page
    </Typography>

    <Container fixed></Container>
  </MySection>
);

export default CartPage;
