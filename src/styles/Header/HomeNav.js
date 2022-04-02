import styled from "styled-components";
import {size, colors, fontSize} from "../variables";
import MEDIA from "../mediaTemplates";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${fontSize.default};
  background-color: ${colors.grey};
  padding: ${size.tiny};
  margin: auto;
  box-shadow: 0 .200rem .25rem rgba(0,0,0,.075);

  img {
    height: ${size.small}
  }

  ul {
    list-style: none;
    display: inline-flex;
  }

  li {
    margin-right: ${size.tiny};
  }

  a {
    font-size: ${fontSize.default};
    line-height: ${fontSize.default};
    vertical-align: middle;
    &:hover {
      color: ${colors.accent} !important;
    }

    svg {
      vertical-align: bottom;
    }
  }

  span {
    margin-right: ${size.micro};
  }

  .mobile-link {
    display: none;
  }

  ${MEDIA.TABLET`
    .nav-link {
      display: none;
    }
    .show-avatar {
      display: none;
    }
    .mobile-link {
      display: inline-block;
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
