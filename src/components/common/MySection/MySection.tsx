import { Container } from "@mui/material";

import { IMySectionProps } from "../../../types/components/components-types";

import * as Styled from "./MySection.styled";

const MySection = ({ children, styles = {} }: IMySectionProps) => (
  <Styled.MySection style={styles}>
    <Container sx={{ height: "100%" }}>{children}</Container>
  </Styled.MySection>
);

export default MySection;
