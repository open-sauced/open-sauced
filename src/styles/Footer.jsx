import styled from "styled-components";
import {colors} from "./variables";

export const Container = styled.footer`
  padding: 4rem 0;
  background: transparent;
  color: ${colors.offWhite};

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 2rem;
    line-height: 3rem;
  }

  li {
    padding: 0.5rem;
  }

  a {
    color: ${colors.saucyRed};
    text-decoration: none;
    &:hover {
      color: ${colors.grey};
    }
  }

  body.dark & a {
    color: ${colors.offWhite};
    &:hover {
      color: ${colors.accent};
    }
  }
`;

export default Container;
