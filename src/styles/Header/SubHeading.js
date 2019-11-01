import styled from "styled-components";
import {size} from "../variables";

const SubHeading = styled.ul`
  display: flex;
  color: white;
  font-size: ${size.tiny};
  list-style-type: none;
  margin-left: 16px;

  li {
    padding-right: 19px;
  }
`;

export default SubHeading;
