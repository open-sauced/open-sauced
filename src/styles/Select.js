import styled from "styled-components";
import {size} from "./variables";

const Select = styled.div`
  padding: 0 ${size.small};
  text-align: end;

  label {
    font-size: ${size.tiny};
    margin-right: ${size.micro};
  }

  select {
    padding: 5px 0;
  }
`;

export {Select};
