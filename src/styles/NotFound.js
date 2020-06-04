import styled from "styled-components";
import MEDIA from "./mediaTemplates";
import {padding, colors} from "./variables";

const NotFound = styled.section`
  text-align: center;
  margin: auto;
  padding: ${padding.sides};
  color: ${colors.lightGrey}

  h1 {
    font-size: 1rem;
  }

  img {
    width: 50%;
    padding: 30px;

    ${MEDIA.TABLET`
      width: 90%;
      padding: 0;
    `};
  }
`;

export {NotFound};
