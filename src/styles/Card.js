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
  margin-bottom: ${size.tiny};
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
  .context-div {
    width: 50%;
    h1 {
      width: 100%;
      font-size: ${size.medium};
      font-weight: ${typography.regular};
      color: ${colors.lighterGrey};
    }
    p {
      width: 80%;
      font-size: ${size.tiny};
      word-wrap:break-word;
      color: ${colors.lighterGrey}
    }
  }
`;

export {Card, CardPadding, FittedCard, ContextStyle};
