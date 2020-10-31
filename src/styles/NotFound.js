import styled from "styled-components";
import MEDIA from "./mediaTemplates";
import {padding, colors, size} from "./variables";
import {chatBubble} from "../images";

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
      padding: 0;
    `};
  }

  * {
    box-sizing: border-box;
  }

  section { 
    position: absolute;
    width: 1000px;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  blockquote.bubble { 
    background-image: url(${chatBubble});
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: 100% 100%;
    margin: 0 auto;
    text-align: center;
    height: 150px;
    box-sizing: content-box;
    line-height: 1;

    font-weight: bold;
    font-size: x-large;
  }

  blockquote.speechOne {
    width: 18%;
    padding-top: 4%;
    margin-left: 380px;
  }

  blockquote.speechTwo {
    width: 25%;
    padding-top: 4%;
    padding-left: 2%;
    padding-right: 2%;
    margin-left: 120px;
    margin-top: 20px;
  }
`;

export {NotFound};
