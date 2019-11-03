import styled from "styled-components";
import {borderRadius, colors} from "./variables";

const Label = styled.p`
  border: ${colors.lighterGrey} solid 2px;
  padding: 3px;
  border-radius: ${borderRadius};
  margin-right: 24px !important;
`;

export default Label;
