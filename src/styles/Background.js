import styled from "styled-components";
import {colors} from "./variables";

export const Container = styled.div`
  background-color: ${colors.accent};
  body.dark & {
    background-color: ${colors.darkGrey};
  }
`;

export default Container;
