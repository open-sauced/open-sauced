import styled from "styled-components";
import {colors} from "./variables";

const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 16px;
  }

  li:hover {
    color: ${colors.lightGrey};
    background-color: ${colors.lighterGrey};
  }

  li:nth-child(even):hover {
    background-color: ${colors.lighterGrey};
  }

  li:nth-child(even) {
    background-color: ${colors.lightestGrey};
  }
`;

export default Container;
