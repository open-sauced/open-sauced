import styled from "styled-components";
import {margin, size, borderRadius, colors, fontSize} from "./variables";

const Container = styled.textarea`
  margin-bottom: 12px;
  border-radius: ${borderRadius};
  border: 1px solid ${colors.lightestGrey};
  box-sizing: border-box;
  box-shadow: none;
  font-size: ${fontSize.default};
  margin-bottom: ${size.tiny};
  outline: none;
  padding: ${size.tiny};
  width: 100%;
  body.dark & {
    background-color: ${colors.darkestGrey};
    color: ${colors.lightestGrey};
  }
`;

export const RenderedNote = styled.div`
  margin-bottom: ${margin.gutter};
  font-size: ${fontSize.default};
  max-width: 30rem;

  .noteContent {
    margin-bottom: ${size.small}
    overflow: auto;
    max-height: 300px;
  }
  body.dark .noteContent a {
    color: ${colors.lightestGrey};
  }
`;


export const NoteArea = styled(Container)`
  resize: none;
  min-height: ${size.xxl};
`;

export default Container;
