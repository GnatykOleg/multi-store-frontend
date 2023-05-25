import { ISectionProps } from "../../../types/components/components-types";

import * as Styled from "./MySection.styled";

const Section = ({ children }: ISectionProps) => (
  <Styled.MySection>{children}</Styled.MySection>
);

export default Section;
