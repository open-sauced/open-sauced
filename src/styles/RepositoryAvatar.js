import styled from "styled-components";
import {borderRadius, margin, size} from "./variables";

const RepositoryAvatar = styled.img`
  margin-right: ${margin.gutter} !important;
  margin-bottom: -${margin.gutter};
  display:inline;
  object-fit: cover;
  height: ${size.medium};
  width: ${size.medium};
  -moz-border-radius: ${borderRadius};
  -webkit-border-radius: ${borderRadius};
  border-radius: ${borderRadius};
  border: 2px solid white;
  line-height: 50px;
`;

export default RepositoryAvatar;
