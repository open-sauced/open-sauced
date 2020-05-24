import styled from "styled-components";
import {size, colors} from "../variables";
import MEDIA from "../mediaTemplates";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${size.micro};
  background-color: ${colors.grey};
  padding: ${size.tiny};
  margin: auto;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;

  img {
    height: ${size.small}
  }

  ul {
    list-style: none;
    display: inline-flex;
  }

  li {
    font-size: ${size.tiny}
    text-transform: uppercase;
    margin-right: ${size.micro};
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
