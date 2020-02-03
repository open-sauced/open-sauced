import styled from "styled-components";
import {size} from "../variables";

const Font = styled.div`
  display: flex;
  flex-direction: row;
`;
const TinyFont = styled(Font)`
  font-size: ${size.tiny};
`;

const MicroFont = styled(Font)`
  font-size: ${size.micro};
`;

export {TinyFont, MicroFont};
