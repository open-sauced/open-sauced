import styled from "styled-components";
import {size} from "../variables";
import MEDIA from "../mediaTemplates";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${size.micro};
  background-color: #fff;
  padding: 4px;

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

  ${MEDIA.TABLET`
    padding: 0 0 0 8px;

    .nav-link {
      display: none;
    }
  `};
`;

export default Container;
