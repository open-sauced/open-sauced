import { styled } from '@stitches/react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const StyledSwitch = styled(SwitchPrimitive.Root, {
    all: 'unset',
    width: 42,
    height: 25,
    backgroundColor: "grey",
    borderRadius: '9999px',
    position: 'relative',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&:focus': { boxShadow: `0 0 0 2px black` },
    '&[data-state="checked"]': { backgroundColor: 'black' },
  });
  
  const StyledThumb = styled(SwitchPrimitive.Thumb, {
    display: 'block',
    width: 21,
    height: 21,
    backgroundColor: 'white',
    borderRadius: '9999px',
    boxShadow: `0 2px 2px black`,
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    willChange: 'transform',
    '&[data-state="checked"]': { transform: 'translateX(19px)' },
  });
  
  export const Switch = StyledSwitch;
  export const SwitchThumb = StyledThumb;