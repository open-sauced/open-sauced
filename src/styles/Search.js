import styled from "styled-components";
import {size, borderRadius, colors} from "./variables";

const Container = styled.input`
  border-radius: ${borderRadius};
  border: 1px solid ${colors.lightestGrey};
  box-sizing: border-box;
  box-shadow: none;
  font-size: ${size.tiny};
  margin-left: ${size.tiny};
  float: left;
  padding: 5px;
  outline: none;
`;

export default Container;
