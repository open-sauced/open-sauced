import styled from "styled-components";
import {size, borderRadius, colors, fontSize} from "./variables";

const Select = styled.div`
  padding: 0 ${size.small};
  text-align: end;

  label {
    font-size: ${fontSize.default};
    margin-right: ${size.micro};
  }

  select {
    padding: ${size.micro};
    border-radius: ${borderRadius};
    border: 1px solid ${colors.lightestGrey};
    background: transparent;
  }
`;

export {Select};
