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

const Logo = styled.img`
  display: "inline-block";
  vertical-lign: "middle"; 
  margin-bottom: 6;
`;

export {FloatRight, FloatLeft, FloatLeftMobileNav, Logo};
