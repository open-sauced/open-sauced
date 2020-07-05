import styled from "styled-components";
import {size, borderRadius, colors} from "./variables";
import {search} from "../icons";

const Container = styled.input`
  border-radius: ${borderRadius};
  border: 1px solid ${colors.lightestGrey};
  box-sizing: border-box;
  box-shadow: none;
  font-size: ${size.tiny};
  margin-left: ${size.tiny};
  float: left;
  padding: 6px;
  outline: none;

  &[type=search] {
    background: #ededed url(${search}) no-repeat ${size.micro} center;
    padding: 6px 6px 6px 35px;
  	width: 200px;
  	transition: all .3s;
  }

  &:focus {
    width: 300px;
  }
`;

export default Container;
