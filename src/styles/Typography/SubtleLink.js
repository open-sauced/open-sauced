import styled from "styled-components";
import {fontSize, colors} from "../variables";

const SubtleLink = styled.a`
  color: ${colors.offWhite} !important;
  text-decoration: none;
  font-weight: bold;
  font-size: ${fontSize.default};
  margin-right: 8px;
`;

export default SubtleLink;
