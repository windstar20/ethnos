import { style } from '@vanilla-extract/css';

export const gridStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
});

export const mainStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  height: `calc(100dvh - 12rem)`,
});

export const flexStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const formWrapperStyle = style({
  width: '35rem',
  height: '65rem',
});
