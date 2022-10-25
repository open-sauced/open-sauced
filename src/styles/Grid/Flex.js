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

  .fpyAse {
    margin-top: 0;
  }
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
  -webkit-justify-content: space-between;

  ${MEDIA.TABLET`
    .productive-developer {
      display: none;
    }
    flex-direction: column;
  `};
`;

const SpaceBetweenTop = styled(SpaceBetween)`
  align-items: flex-start;
  -webkit-align-items: flex-start;
`;

export {
  Flex,
  SpaceAround,
  SpaceBetween,
  SpaceBetweenTop,
  FlexColumnCenter,
  FlexStart,
  FlexCenter,
  FlexColumn,
  FlexHeader
};
