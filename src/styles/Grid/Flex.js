import styled from "styled-components";
import MEDIA from "../mediaTemplates";

const Flex = styled.div`
  display: flex;
`;

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;

const FlexHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export {Flex, SpaceBetween, FlexColumnCenter, FlexStart, FlexCenter, FlexColumn, FlexHeader};
