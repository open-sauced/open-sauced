import styled from "styled-components";
import {margin, size} from "./variables";

const RenderedNote = styled.div`
  margin-bottom: ${margin.gutter};
  font-size: ${size.tiny};

  .noteContent {
    margin-bottom: ${size.small}
  }
`;

const NoteArea = styled.textarea`
  resize: none;
  min-height: ${size.xxl};
`;

export {RenderedNote, NoteArea};

