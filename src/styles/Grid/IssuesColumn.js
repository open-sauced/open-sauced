import styled from "styled-components";
import MEDIA from "../mediaTemplates";

const IssuesColumn = styled.div`
  flex: 2;

  ${MEDIA.TABLET`
    margin: 0;
  `};
`;

export default IssuesColumn;
