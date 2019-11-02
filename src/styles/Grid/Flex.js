import styled from "styled-components";
import MEDIA from "../mediaTemplates";

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;

const FlexHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;

  ${MEDIA.TABLET`
    flex-direction: column-reverse;
  `};
`;

export {SpaceBetween, FlexCenter, FlexHeader};
