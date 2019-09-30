import { css } from "styled-components";
import BREAKPOINTS from "./breakpoints";

// This creates the media templates, which allows for simple
// breakpoint usage inside styled-components, e.g.:

const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  acc[`MIN_${label}`] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default MEDIA;
