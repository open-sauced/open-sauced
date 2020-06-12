import styled from "styled-components";
import MEDIA from "../mediaTemplates";

const GridColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 1}, 1fr);

  ${MEDIA.TABLET`
    grid-template-columns: repeat(1, 1fr);
  `};
`;

export default GridColumns;
