import styled from "styled-components";
import {size, borderRadius, colors, fontSize} from "./variables";
import {search} from "../icons";

const Container = styled.input`
  border-radius: ${borderRadius};
  border: 1px solid ${colors.lightestGrey};
  box-sizing: border-box;
  box-shadow: none;
  font-size: ${fontSize.default};
  margin-left: ${size.tiny};
  float: left;
  padding: ${size.micro};
  outline: none;

  &[type=search] {
    background: ${colors.lightestGrey} url(${search}) no-repeat ${size.micro} center;
    padding: ${size.micro} ${size.micro} ${size.micro} 35px;
  	width: 200px;
  	transition: all .3s;
  }

  &:focus {
    width: 300px;
  }
`;

export default Container;
