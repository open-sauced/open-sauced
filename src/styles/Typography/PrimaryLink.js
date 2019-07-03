import styled from "styled-components";
import {colors} from "../variables";

const PrimaryLink = styled.a`
  color: ${colors.saucyRed};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: ${colors.cheesyYellow} ;
  }
`;

export default PrimaryLink;
