import styled from "styled-components";
import {size, borderRadius, colors, fontSize} from "./variables";

const Container = styled.input`
  border-radius: ${borderRadius};
  border: 1px solid ${colors.lightestGrey};
  box-sizing: border-box;
  box-shadow: none;
  font-size: ${fontSize.default};
  margin-bottom: ${size.tiny};
  margin-right: ${size.tiny};
  outline: none;
  padding: ${size.tiny};
  width: 100%;
`;

export default Container;
