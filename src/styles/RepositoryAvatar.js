import styled from "styled-components";
import {borderRadius} from "./variables";

const RepositoryAvatar = styled.img`
  margin-right: 10px !important;
  margin-bottom: -10px;
  display:inline;
  object-fit: cover;
  height: 40px;
  width: 40px;
  -moz-border-radius: 5px;
  -webkit-border-radius: ${borderRadius};
  border-radius: 5px;
  border: 2px solid white;
  line-height: 50px;
`;

export default RepositoryAvatar;
