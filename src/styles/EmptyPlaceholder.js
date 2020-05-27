import styled from "styled-components";
import MEDIA from "./mediaTemplates";

const EmptyPlaceholder = styled.div`
  text-align: center;
  margin-top: 100px;

  .helper {
    color: grey;
    font-size: 20px;
    margin-top: 10px;
  }

  ${MEDIA.TABLET`
  margin: 50px 0;
  `};
`;

export {EmptyPlaceholder};
