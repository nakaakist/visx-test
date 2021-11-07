import { style } from '@vanilla-extract/css';
import { themeVars } from '../theme.css';

export const navbar = style({
  backgroundColor: themeVars.color.brand,
  position: 'fixed',
  width: '100%',
  height: '70px',
  boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.2)',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const title = style({
  fontSize: themeVars.fontSize.large,
  color: themeVars.color.whiteText,
  textDecoration: 'none',
  letterSpacing: '0.1em',
  ':hover': {
    color: themeVars.color.brand4,
    textDecorationLine: 'underline',
  },
});

export const hr = style({
  width: '100%',
  borderTop: '0px solid',
  opacity: 0.5,
  borderColor: themeVars.color.brand4,
  marginTop: themeVars.space.small,
});

export const menu = style({
  marginTop: themeVars.space.small,
  marginBottom: themeVars.space.small,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const menuItem = style({
  marginLeft: themeVars.space.medium,
  marginRight: themeVars.space.medium,
  fontSize: themeVars.fontSize.medium,
  color: themeVars.color.whiteText,
  textDecoration: 'none',
  ':hover': {
    color: themeVars.color.brand4,
    textDecorationLine: 'underline',
  },
});

export const navbarSpace = style({
  height: '80px',
});
