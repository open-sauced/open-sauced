import styled from "styled-components";
import {borderRadius, colors, size, fontSize} from "./variables";

const Button = styled.button`
  background: ${props => {
    return props.primary ? colors.saucyRed : colors.offWhite;
  }};
  border: ${props => {
    return props.primary ? "none" : `2px solid ${colors.offWhite}`;
  }};
  border-radius: ${borderRadius};
  webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  color: ${props => {
    return props.primary ? "white" : "#664E48";
  }};
  cursor: pointer;
  font-size: ${fontSize.default};
  font-weight: 600;
  min-height: 35px;
  min-width: ${props => props.minWidth ? `${props.minWidth}px` : "68px"};
  ${props => props.maxWidth && `max-width: ${props.maxWidth}px`};
  margin-bottom: ${size.tiny};
  margin-right: ${size.micro};
  outline: none;
  padding: ${props => {
    return props.primary ? "19px" : size.tiny;
  }};
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${props => {
    return props.primary ? colors.saucyRed : colors.lighestGrey;
  }};

    webkit-box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.2);
    moz-box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.2);
    transform: translate(0, -3px);
    transition: background 0.9s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  &:disabled {
    background: ${colors.lighterGrey};
    color: ${colors.darkestGrey};
    cursor: not-allowed;
  }
`;

export const IconButton = styled.button` 
  all: unset;
  margin-left: 15px;
  img {
    height: 20px;
    width: 20px;
    padding-bottom: 7px;
  }
`;

export const InputButton = styled(Button)`
  font-size: ${fontSize.default};
  padding: 0;
`;

export const MarketingButton = styled(Button)`
  font-size: ${fontSize.default};
  text-transform: uppercase;
  padding: 10px 32px;
`;

export default Button;
