import styled from "styled-components";
import {size, colors} from "../variables";

const SubtleLink = styled.a`
  color: ${colors.offWhite} !important;
  text-decoration: none;
  font-weight: bold;
  font-size: ${size.tiny};
  margin-right: 8px;
`;

export default SubtleLink;
