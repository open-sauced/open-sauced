import styled from "styled-components";
import {margin, size} from "./variables";

const RenderedNote = styled.div`
  margin-bottom: ${margin.gutter};

  .noteContent {
    margin-bottom: ${size.small}
  }
`;

const NoteArea = styled.textarea`
  resize: none;
  min-height: 170px;
`;

export {RenderedNote, NoteArea};

