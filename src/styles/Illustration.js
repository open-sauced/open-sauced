import styled from "styled-components";
import {borderRadius} from "./variables";
import MEDIA from "./mediaTemplates";

const DoneChecking = styled.img`
  width: 30%;
  -moz-border-radius: ${borderRadius};
  -webkit-border-radius: ${borderRadius};
  border-radius: ${borderRadius};
  padding: 0 20px

  ${MEDIA.DESKTOP`
    display: none;
  `};
`;

export default DoneChecking;
