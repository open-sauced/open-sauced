import styled from "styled-components";
import {margin} from "../variables";
import MEDIA from "../mediaTemplates";

const IssuesColumn = styled.div`
  flex: 2;
  margin-right: ${margin.gutter};

  ${MEDIA.TABLET`
    margin: 0;
  `};
`;

export default IssuesColumn;
