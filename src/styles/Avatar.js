import styled from "styled-components";
import {borderRadius} from "./variables";

const Avatar = styled.img`
  object-fit: cover;
  height: 2.5em;
  width: 2.5em;
  -moz-border-radius: 5px;
  -webkit-border-radius: ${borderRadius};
  border-radius: 5px;
  border: 2px solid white;
`;

export default Avatar;
