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

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;

  ${MEDIA.TABLET`
    flex-direction: column-reverse;
  `};
`;

export {SpaceBetween, FlexStart, FlexCenter, FlexColumn, FlexHeader};
