import styled from "styled-components";
import {size} from "../variables";
import MEDIA from "../mediaTemplates";

const Container = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: ${size.micro};
  background-color: #fff;

  ul {
    list-style: none;
    display: inline-flex;
  }

  li {
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
