import styled from "styled-components";
import {padding, colors} from "./variables";

const NotFound = styled.section`
  text-align: center;
  margin: auto;
  padding: ${padding.sides};
  color: ${colors.lightGrey}

  img {
    width: 50%;
  }
`;

export {NotFound};
