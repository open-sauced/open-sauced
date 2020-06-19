import styled from "styled-components";
import {colors, size} from "./variables";

const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;
  }

  li {
    padding: 8px 12px;
    border-top: 1px solid #e1e4e8;
  }

  li:hover {
    color: ${colors.lightGrey};
    background-color: ${colors.lightestGrey};
  }

  .avatar-stack {
    vertical-align: middle;
    display: inline;
    margin-left: 3px;

    .avatar {
      height: ${size.tiny};
      margin-right: -${size.micro};
      margin-top: 10px;
      background-color: white;
      border: 1px solid white;
      border-radius: ${size.tiny};
      transition: 0.1s all;

      &:last-child {
        margin-right: 2px;
      }
    }

    &:hover .avatar {
      margin-right: 3px;
    }
  }

  .issueHelper {
    color: grey;
    margin-left: 3px;

    .icon {
      margin-top: 5px;
    }
  }
`;

export default Container;
