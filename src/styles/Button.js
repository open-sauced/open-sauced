import styled from "styled-components";
import {borderRadius, colors, padding} from "./variables";

const Button = styled.button`
  background: ${ (props) => { return props.destructive ? colors.red : colors.green; }};
  border: none;
  border-radius: ${borderRadius.smallBorderRadius};
  box-shadow: none;
  color: white;
  cursor: pointer;
  font-size: ${padding.tiny};
  margin-bottom: ${padding.tiny};
  margin-right: ${padding.micro};
  outline: none;
  padding: ${padding.tiny};
  transition: background 0.2s ease;

  &:hover {
    background: ${ (props) => { return props.destructive ? colors.darkRed : colors.darkGreen; }};
  }
`;

export default Button;
