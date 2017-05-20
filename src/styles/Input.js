import styled from "styled-components";
import {colors, borderRadius, padding} from "./cssConstants";

const Input = styled.input`
  border: 1px solid ${colors.lightestGrey};
  border-radius: ${borderRadius.smallBorderRadius};
  box-sizing: border-box;
  box-shadow: none;
  font-size: ${padding.tiny};
  margin-bottom: ${padding.tiny};
  outline: none;
  padding: ${padding.tiny};
  width: 100%;
`;

export default Input;
