import styled from "styled-components";
import {borderRadius, colors, size} from "./variables";

const Button = styled.button`
  background: ${props => {
    return props.primary ? colors.saucyRed : colors.offWhite;
  }};
  border: ${props => {
    return props.primary ? "none" : `2px solid ${colors.offWhite}`;
  }};
  border-radius: ${borderRadius};
  box-shadow: 0 1px 2px 0 #33160F;
  color: ${props => {
    return props.primary ? "white" : "#664E48";
  }};
  cursor: pointer;
  font-size: ${size.tiny};
  font-weight: 600
  min-height: 35px;
  min-width: 68px;
  margin-bottom: ${size.tiny};
  margin-right: ${size.micro};
  outline: none;
  padding: ${props => {
    return props.primary ? "19px" : size.tiny;
  }}
  transition: background 0.2s ease;

  &:hover {
    background: ${props => {
    return props.primary ? colors.saucyRed : colors.accent;
  }};

    color: ${colors.lightGrey};
    border: 2px solid ${colors.lightGrey};
    transition: background 0.9s ease, linear;
  }
`;

export default Button;
