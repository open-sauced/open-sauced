import styled from "styled-components";
import {size, colors} from "../variables";
import MEDIA from "../mediaTemplates";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.darkGrey};
  color: white;
  font-size: ${size.micro};
  font-weight: bold;

  ul {
    list-style: none;
    display: inline-flex;
    padding-left: 10px;
  }

  li {
    font-size: 13px;
    margin-right: ${size.tiny};
    padding: 2px 7px;
    background: ${colors.darkestGrey};
    border-radius: 5px;
  }

  a {
    vertical-align: middle;
    text-decoration: none;
    color: #fff;
  }

  span {
    margin-right: ${size.micro};
  }
  
  .no-well {
    background: transparent;
    font-weight: initial;
  }

  .helper {
    margin: 0;
    color: ${colors.lightGrey};
  }

  ${MEDIA.TABLET`
    .helper {
      margin-left: 5px;
    }

    ul {
      padding-left: 10px;
    }

    ul li {
      display: none;
    }

    ul li:nth-last-of-type(2) {
      display: inherit !important;
    }
  `};
`;

export default Container;
