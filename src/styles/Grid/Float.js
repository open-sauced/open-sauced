import styled from "styled-components";
import MEDIA from "../mediaTemplates";

const FloatLeft = styled.div`
  float: left;
`;

// Special case for the mobile view of the nav.
const FloatLeftMobileNav = styled.div`
  float: left;
  ${MEDIA.TABLET`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `};

`;

const FloatRight = styled.div`
  float: right;
`;

export {FloatRight, FloatLeft, FloatLeftMobileNav};
