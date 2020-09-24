import styled from "styled-components";
import {borderRadius, size} from "./variables";

const ProfileAvatar = styled.img`
  object-fit: cover;
  -moz-border-radius: 5px;
  -webkit-border-radius: ${borderRadius};
  border-radius: 5px;
  margin-right: 10px;
  border: 2px solid white;
  min-width: ${size.small};
`;

export default ProfileAvatar;
