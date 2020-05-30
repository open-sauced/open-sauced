import styled from "styled-components";
import {size} from "../variables";
import MEDIA from "../mediaTemplates";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #171c1d;
  color: white;
  font-size: 8px;
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
    background: #0c0e0e;
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

  ${MEDIA.TABLET`
    .nav-link {
      display: none;
    }

    ul {
      padding-left: 10px;
    }

    ul li {
      display: none;
    }

    ul li:nth-last-of-type(1),
    ul li:nth-last-of-type(1) ~ li {
        display: inherit !important;
    }
  `};
`;

export default Container;
