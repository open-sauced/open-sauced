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
  h2 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
