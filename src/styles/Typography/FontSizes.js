import styled from "styled-components";
import {fontSize} from "../variables";

const Font = styled.div`
  display: flex;
  flex-direction: row;
`;
const TinyFont = styled(Font)`
  font-size: ${fontSize.default};
`;

const MicroFont = styled(Font)`
  font-size: ${fontSize.default};
`;

export {TinyFont, MicroFont};
