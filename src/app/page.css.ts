import { style } from '@vanilla-extract/css';

export const flexStyle = style({
  display: 'flex',
});
export const alignCenterStyle = style({
  alignItems: 'center',
});
export const justifyCenterStyle = style({
  justifyContent: 'center',
});
export const justifyBetweenStyle = style({
  justifyContent: 'space-between',
});

export const gridStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
});

export const mainStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  height: `calc(100dvh - 5rem)`,
});

export const flexCenterCenterStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const formWrapperStyle = style({
  width: '35rem',
  height: '65rem',
  padding: '1rem 0',
  border: '1px solid rgba(85, 85, 85)',
});

export const titleContainerStyle = style([
  flexCenterCenterStyle,
  {
    height: '13.7rem',
  },
]);

export const titleStyle = style({
  fontSize: '2rem',
});

export const inputWrapperStyle = style({
  height: '3.8rem;',
  backgroundColor: '#e9e9e9',
  padding: '0 2rem 0.6rem 2rem',
});

export const inputStyle = style({
  width: '100%',
  height: '3.6rem',
  backgroundColor: '#121212',
  border: '1px solid rgba(85, 85, 85)',
});
export const buttonWrapperStyle = style({
  padding: '0.8rem 4rem',
});

export const buttonStyle = style([
  // flexStyle,
  {
    fontSize: '1.7rem',
    color: 'rgba(255,255,255)',
    backgroundColor: 'rgba(0, 149, 246, 0.7)',
    width: '26.8rem',
    height: '3.2rem',
    borderRadius: '8px',
    selectors: {
      '&:hover': {
        color: '#000000',
      },
    },
  },
]);

export const footerContainerStyle = style([
  flexStyle,
  justifyCenterStyle,
  {
    height: '5rem',
    backgroundColor: '#e9e9e9',
  },
]);

export const columnGapStyle = style({
  columnGap: '2rem',
});
export const wrapperStyle = style([
  flexStyle,
  alignCenterStyle,
  columnGapStyle,
  { padding: '0 4rem' },
]);
