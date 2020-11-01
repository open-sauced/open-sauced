import styled from "styled-components";
import {fontSize} from "../variables";

const Heading = styled.h1`
  align-items: center;
  display: flex;
  color: white;
  font-size: ${fontSize.xl};

  img {
    max-width: 40px;
    margin-right: 16px;
  }
`;

export default Heading;
