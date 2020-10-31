import styled from "styled-components";
import MEDIA from "./mediaTemplates";
import {padding, colors, size} from "./variables";

const NotFound = styled.section`
  text-align: center;
  margin: auto;
  padding: ${padding.sides};
  color: ${colors.lightGrey}

  h1 {
    font-size: ${size.tiny};
  }
  h2 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  img {
    width: 70%;
    padding: 30px;

    ${MEDIA.TABLET`
      width: 90%;
    `};
  }
`;

export {NotFound};
