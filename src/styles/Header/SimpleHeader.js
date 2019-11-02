import styled from "styled-components";
import MEDIA from "../mediaTemplates";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${MEDIA.TABLET`
    padding: 0 0 0 8px;

    .nav-link {
      display: none;
    }
  `};
`;

export default Container;
