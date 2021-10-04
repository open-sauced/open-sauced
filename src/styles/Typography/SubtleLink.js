import styled from "styled-components";
import {fontSize, colors} from "../variables";

const SubtleLink = styled.a`
  color: ${colors.lightGrey} !important;
  text-decoration: none;
  font-weight: bold;
  font-size: ${fontSize.default};
  margin-right: 8px;
  
  body.dark & {
    a: {
      color: ${colors.lightestGrey} !important;
    }
  }
`;

export default SubtleLink;
