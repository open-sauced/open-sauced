import styled from "styled-components";
import {size} from "../variables";
import MEDIA from "../mediaTemplates";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: ${size.micro};
  background-color: #171c1d;
  color: white;

  ul {
    list-style: none;
    display: inline-flex;
    padding-left: 10px;
  }

  li {
    font-size: ${size.tiny}
    margin-right: ${size.tiny};
  }

  a {
    vertical-align: middle;
  }

  span {
    margin-right: ${size.micro};
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
