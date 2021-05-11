import styled from "styled-components";
import {borderRadius} from "./variables";

const Avatar = styled.img`
  height: ${props => {
    return props.small ? ".9em" : "2.5em";
  }};
  object-fit: cover;
  -moz-border-radius: 5px;
  -webkit-border-radius: ${borderRadius};
  border-radius: 5px;
  border: 2px solid white;
`;

export default Avatar;
