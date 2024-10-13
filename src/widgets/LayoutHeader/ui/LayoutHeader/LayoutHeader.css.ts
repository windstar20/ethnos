import { style } from '@vanilla-extract/css';

export const myStyle = style({
  backgroundColor: '#e9e9e9',
});

export const customStyle = style([
  myStyle,
  {
    color: 'aqua',
  },
]);
