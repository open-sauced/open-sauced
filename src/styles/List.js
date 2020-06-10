import styled from "styled-components";
import {colors} from "./variables";

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

  .participants {
    height: 15px;
    border-radius: 10px;
    vertical-align: middle;
    margin-right: 0;
    margin-left: 5px;
    margin-top: 5px;
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
