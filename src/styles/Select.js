import styled from "styled-components";
import {size, borderRadius, colors} from "./variables";

const Select = styled.div`
  padding: 0 ${size.small};
  text-align: end;

  label {
    font-size: ${size.tiny};
    margin-right: ${size.micro};
  }

  select {
    padding: 6px;
    border-radius: ${borderRadius};
    border: 1px solid ${colors.lightestGrey};
    background: transparent;
  }
`;

export {Select};
