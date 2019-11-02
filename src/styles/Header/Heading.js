import styled from "styled-components";
import {size} from "../variables";

const Heading = styled.h1`
  align-items: center;
  display: flex;
  color: white;
  font-size: ${size.medium};

  img {
    max-width: 40px;
    margin-right: 16px;
  }
`;

export default Heading;
