import styled, { keyframes } from "styled-components";
import { TooltipContent, TooltipArrow } from "@radix-ui/react-tooltip";
import { colors } from "./variables";

const TooltipAnimation = keyframes`
    0% { opacity: 0; transform: translateY(2px); }
    100% { opacity: 1; transform: translateY(0); }
`;

const TooltipContainer = styled(TooltipContent)`
    background-color: ${colors.lightestGrey};
    color: black;
    border-radius: 4px;
    padding: 15px;
    font-size: 15px;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    animation-fill-mode: forwards;
    &[data-state="delayed-open"] {
        &[data-side="top"] { animation-name: ${TooltipAnimation}; }
    }
    p {
        padding-top: 10px;
        text-align: center;
    }
`;

const TooltipArrowComponent = styled(TooltipArrow)`
    fill: ${colors.lightestGrey};
`;

export {
    TooltipContainer,
    TooltipArrowComponent
};