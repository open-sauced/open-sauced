import styled from "styled-components";
import { TooltipContent, TooltipArrow } from "@radix-ui/react-tooltip";

const TooltipContainer = styled(TooltipContent)`
    background-color: red;
`;

const TooltipArrowComponent = styled(TooltipArrow)`
    fill: red;
`;

export {
    TooltipContainer,
    TooltipArrowComponent
};