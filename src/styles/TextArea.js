import styled from "styled-components";
import {margin, size, borderRadius, colors} from "./variables";

const Container = styled.textarea`
  margin-bottom: 12px;
  border-radius: ${borderRadius};
  border: 1px solid ${colors.lightestGrey};
  box-sizing: border-box;
  box-shadow: none;
  font-size: ${size.tiny};
  margin-bottom: ${size.tiny};
  outline: none;
  padding: ${size.tiny};
  width: 100%;
`;

export const RenderedNote = styled.div`
  margin-bottom: ${margin.gutter};
  font-size: ${size.tiny};
  max-width: 30rem;

  .noteContent {
    margin-bottom: ${size.small}
    overflow: auto;
    max-height: 300px;
  }
`;


export const NoteArea = styled(Container)`
  resize: none;
  min-height: ${size.xxl};
`;

export default Container;
