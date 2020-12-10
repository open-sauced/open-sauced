import styled from "styled-components";
import {fontSize} from "../variables";

const SubHeading = styled.ul`
  display: flex;
  color: white;
  font-size: ${fontSize.default};
  list-style-type: none;
  margin-left: 16px;

  li {
    padding-right: 19px;
  }
`;

export default SubHeading;
