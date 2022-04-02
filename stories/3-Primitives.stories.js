import React from "react";
import Background from "../src/styles/Background";
import {AccentLink, SubtleLink, MicroFont, ErrorMessage} from "../src/styles/Typography";

export default {
  title: "Primitives",
};

export const TypographyAccentLink = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <AccentLink>
      <a>Test</a>
    </AccentLink>
  </Background>
);

export const TypographySubtleLink = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Background style={{height: 35, width: 50, backgroundColor: "black", padding: "10px"}}>
      <SubtleLink>
        <a>Test</a>
      </SubtleLink>
    </Background>
  </Background>
);

export const TypographyMicroFont = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <MicroFont>
      Test
    </MicroFont>
  </Background>
);

export const TypographyErrorMessage = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <ErrorMessage>
      Test
    </ErrorMessage>
  </Background>
);
