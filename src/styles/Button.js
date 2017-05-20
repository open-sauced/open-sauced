import styled from "styled-components";
import {colors, borderRadius, padding} from "./cssConstants";

const Button = styled.button`
  background: ${colors.green};  
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
    background: ${colors.darkGreen};
  }
`;

export default Button;
