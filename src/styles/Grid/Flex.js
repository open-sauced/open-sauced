import styled from "styled-components";
import MEDIA from "../mediaTemplates";

const Flex = styled.div`
  display: flex;
  ${MEDIA.TABLET`
    flex-direction: column;
  `};
`;

const FlexCenter = styled.div`
  display: flex;
  align-items: center;

  .stars {
    align-items: flex-end !important;
  }
`;

const FlexHeader = styled(FlexCenter)`
  justify-content: space-between;
`;

const FlexColumnCenter = styled(FlexCenter)`
  flex-direction: column;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexEnd = styled(FlexCenter)`
  justify-content: flex-end;
`;

const FlexStart = styled(FlexCenter)`
  justify-content: flex-start;
`;

const SpaceAround = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  -webkit-justify-content: space-around;
`;

const SpaceBetween = styled.div`
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  justify-content: space-between;

  ${MEDIA.TABLET`
    flex-direction: column;
  `};
`;

export {
  Flex,
  SpaceAround,
  SpaceBetween,
  FlexColumnCenter,
  FlexEnd,
  FlexStart,
  FlexCenter,
  FlexColumn,
  FlexHeader
};
