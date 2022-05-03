import styled from "styled-components";
import { TooltipContent, TooltipArrow } from "@radix-ui/react-tooltip";

const TooltipContainer = styled(TooltipContent)`
    background-color: red;
    border-radius: 4px;
    padding: 15px;
    font-size: 15px;
    line-height: 1px;
    @media (prefers-reduced-motion: no-preference) {
        animation-duration: 400ms;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        animation-fill-mode: forwards;
        will-change: transform, opacity;
        &[data-state="delayed-open"] {
          '&[data-side="top"]': { animationName: slideDownAndFade },
          '&[data-side="right"]': { animationName: slideLeftAndFade },
          '&[data-side="bottom"]': { animationName: slideUpAndFade },
          '&[data-side="left"]': { animationName: slideRightAndFade },
        },
    }
`;

const TooltipArrowComponent = styled(TooltipArrow)`
    fill: red;
`;

export {
    TooltipContainer,
    TooltipArrowComponent
};