import styled from "styled-components";
import {borderRadius, colors, size} from "./variables";

export const Container = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px 0;
  border: 0 solid rgba(123, 123, 123, 0.498039);
  border-radius: ${borderRadius.smallBorderRadius};
  font-size: ${size.small};
  padding: ${size.small};
  list-style-type: none;
  margin-bottom: ${size.tiny};
  margin-right: ${size.tiny};
  outline: none;
  transition: background-color 0.2s ease;
  min-width: 80%;

  a:hover {
    text-decoration-color: ${colors.cheesyYellow};
  }

  a {
    color: ${colors.grey};
    display: flex;
    text-decoration: none;
  }

  p {
    font-size: ${size.tiny};
    margin-bottom: ;
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
  }
`;

export default Container;
