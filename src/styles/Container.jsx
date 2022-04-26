import styled from "styled-components";
import MEDIA from "./mediaTemplates";

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 80%;
  margin: auto;

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    text-align: center;
  `};
`;

export const CreateGoalsContainer = styled.div`
  max-width: 60%;

  ${MEDIA.TABLET`
    max-width: 100%;
  `};
`;
export const OnBoardingText = styled.div`
  h1 {
    width: auto;
    padding-right: 20px;
  };
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default Container;
