import styled from "styled-components";
import {colors, size, fontSize} from "../variables";

const AccentLink = styled.a`
  color: ${colors.green} !important;
  font-weight: bold;
  margin-top: ${size.micro};
  font-size: ${fontSize.default};
`;

export default AccentLink;
