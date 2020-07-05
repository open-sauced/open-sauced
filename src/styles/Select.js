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
    padding: 6px;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    background: transparent;
  }
`;

export {Select};
