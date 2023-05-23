import { ISectionProps } from "../../../types/common/components/components-types";

import * as Styled from "./Section.styled";

const Section = ({ children }: ISectionProps) => (
  <Styled.MySection>{children}</Styled.MySection>
);

export default Section;
