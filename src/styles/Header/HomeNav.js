import styled from "styled-components";
import {fontSize, size, colors} from "../variables";
import MEDIA from "../mediaTemplates";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.grey};
  padding: ${size.tiny};
  margin: auto;
  box-shadow: 0 .200rem .25rem rgba(0,0,0,.075);

  img {
    height: ${fontSize.xlarge}
  }

  ul {
    list-style: none;
    display: inline-flex;
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
      padding: 2px;
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
