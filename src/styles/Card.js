import styled from "styled-components";
import {borderRadius, colors, size, typography} from "./variables";

const Card = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px 0;
  padding: ${size.small};
  border: 0 solid rgba(123, 123, 123, 0.498039);
  border-radius: ${borderRadius};
  font-size: ${size.small};
  list-style-type: none;
  margin: ${size.tiny} 0 0 0;
  outline: none;
  transition: background-color 0.2s ease;
  min-width: 80%;

  a:hover {
    text-decoration-color: ${colors.cheesyYellow};
  }

  a {
    color: ${colors.grey};
    text-decoration: none;
  }

  h1 {
    font-weight: 300;
    color: ${colors.lightGrey} !important;
  }

  hr {
    color: ${colors.lightestGrey};
    opacity: 50%;
  }

  p {
    font-size: ${size.tiny};
    margin: 5px 0 4px 0;
  }

  span {
    font-size: ${size.micro};
    margin: ${size.tiny} ${size.small} 0 0;
  }

  small {
    font-size: ${size.tiny};
  }

  svg {
    margin-right: 4px;
    margin-bottom: 5px;
    fill: ${colors.lightGrey} !important;
  }

  img {
    margin-right: 24px;
    border-color: ${colors.lightestGrey};
  }

  .details {
    margin: 0;
  }
`;

const FittedCard = styled(Card)`
  padding: 0;
`;

const CardPadding = styled.div`
  padding: ${size.small} ${size.tiny} 0;
`;

const ContextStyle = styled(Card)`
  h1 {
    width: 100%;
    font-size: ${size.medium};
    font-weight: ${typography.light};
    color: ${colors.lightGrey};
    margin-bottom: 16px;
  }
  p {
    width: 100%;
    word-wrap: break-word;
    color: ${colors.lightGrey};
    line-height: 24px;
    margin-bottom: 16px;
  }

  a {
    color: ${colors.lighterGrey};
  }
`;

const HintStyle = styled(Card)`
  color: ${colors.lightGrey};
  font-weight: ${typography.light};
  word-wrap: break-word;
`;

const OnBoardStyle = styled(Card)`
  min-height: 400px;
  h4 {
    color: ${colors.lightGrey};
  }
  img {
    position: absolute;
  }
  /* hide default checkbox */
  .checkbox input[type="checkbox"] {
    opacity: 0;
  }

  .checkbox label {
    color: ${colors.lightGrey};
  }

  .checkbox label.checked {
    text-decoration: line-through;
    color: ${colors.lighterGrey};
  }

  /* create outer box */
  .checkbox label::before {
    content: "";
    display: block;
    height: 16px;
    width: 16px;
    border: 1px solid ${colors.lighterGrey};
    margin-right: 20px;
  }
  .checkbox label::after {
    content: "";
  }

  .checkbox label {
    position: relative;
    margin-left: 40px;
  }

  .checkbox label::before,
  .checkbox label::after {
    position: absolute;
  }

  /* Outer-box */
  .checkbox label::before {
    top: 3px;
  }
`;

export {Card, CardPadding, FittedCard, ContextStyle, HintStyle, OnBoardStyle};
