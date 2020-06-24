import styled from "styled-components";
import {fontSize, padding, colors} from "../variables";

const SubtleLink = styled.a`
  color: ${colors.offWhite} !important;
  text-decoration: none;
  font-weight: bold;
  font-size: ${fontSize.medium};
  margin-right: ${padding.large};
`;

export default SubtleLink;
