import styled from "styled-components";
import {colors, size, margin} from "./variables";

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
      margin-top: ${margin.gutter};
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

    .others {
      color: black;
      vertical-align: middle;
      margin-bottom: 5px;
      display: inline-block;
      background-color: ${colors.lightestGrey};
      font-size: ${size.tiny};
      line-height: 15px;
      height: 15px;
      min-width: 15px;
      text-align: center;
      border-radius: ${size.large};
      border: 1px solid ${colors.darkGrey};
    }
  }

  .issueHelper {
    color: grey;
    margin-left: 3px;

    .icon {
      margin-top: 5px;
    }
  }

  .loading {
    padding: 0 35px 0 ${size.small};

    .meta, .label {
      margin-top: ${size.tiny}
    }
  }
`;

export default Container;
