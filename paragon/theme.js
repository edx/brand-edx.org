// The theme.js for Paragon. The structure of this object follows the
// theme specification found here: https://system-ui.com/theme/. Theme values
// not defined here will fallback to their Paragon defaults.

let colors = {
  white: '#fff',
  gray100: '#ebebeb',
  gray200: '#cccccc',
  gray300: '#adadad',
  gray400: '#8f8f8f',
  gray500: '#707070',
  gray600: '#5c5c5c',
  gray700: '#454545',
  gray800: '#333333',
  gray900: '#212529',
  black: '#000',
};

colors = {
  ...colors,
  blue: '#00688D',
  red: '#AB0D02',
  yellow: '#D6B600',
  green: '#0D7D4D',
};

colors = {
  ...colors,
  primary: '#00262B', // elm
  brand: '#D23228',
  success: colors.green,
  info: colors.blue,
  danger: colors.red,
  warning: colors.yellow,
  light: '#E1DDDB', // limestone
  dark: '#00262B', // elm
  accentA: '#03C7E8', // isotope blue
  accentB: '#F0CC00', // oxide yellow
}

colors = {
  ...colors,
  primary300: '#2D494E',
  primary400: '#0E3639',
  primary500: colors.primary,
  primary600: '#002326',
  primary700: '#002121',

  brand500: colors.brand,
  brand700: '#921108',
  light200: '#FBFAF9',
  light300: '#F2F0EF',
  light400: '#EAE6E5',
  light500: colors.light,
  light700: '#D7D3D1',

  dark200: '#475B65',
  dark300: '#2D494E',
  dark400: '#0E3639',
  dark500: colors.dark,
  dark600: '#002326',
  dark700: '#002121',

  info100: '#EFF8FA',
  info200: '#9CD2E6',
  info300: '#1C8DBE',
  info500: colors.info,
  info700: '#004972',
  info900: '#002F4A',

  success100: '#F2FAF7',
  success200: '#BBE6D7',
  success300: '#30A171',
  success500: colors.success,
  success700: '#175B3C',
  success900: '#0F4D0F',

  danger100: '#FCF1F4',
  danger200: '#F3AEA9',
  danger300: '#CA3A2F',
  danger500: colors.danger,
  danger700: '#951C13',
  danger900: '#690E07',

  warning100: '#FFFADB',
  warning200: '#FFEA75',
  warning300: '#F0CC00',
  warning500: colors.warning,
  warning700: '#998200',
  warning900: '#7A6800',
}

// Color system

// Brand colors. Do not use these variables (L208 - L219).
// They are non-standard theme variables and will be removed in a future release.

const brandColors = {
  garnet: colors.brand;
  elm: colors.primary;
  limestone: colors.light;
  limestone500: themeColorLevels.light700;
  limestone300: themeColorLevels.light400;
  limestone200: themeColorLevels.light300;
  limestone100: themeColorLevels.light200;
  isotopeBlue: colors.accentA;
  oxideYellow: colors.accentB;
  textGray: colors.gray700;
  textElm: themeColorLevels.primary300;
  linkBlue: colors.info;
};

const elementColorLevels = {
  focus: 700,
};

// Customize the light and dark text colors for use in our YIQ color contrast function.
const yiqColors = {
  yiqTextDark: colors.black,
  yiqTextLight: colors.white,
}


// Body
//
// Settings for the `<body>` element.
const body = {
  bg: colors.white,
  color: colors.gray700,
}

// Links
//
// Style anchor elements.
const link = {
  color: colors.info,
  decoration: 'none',
  hoverColor: colors.info700,
  hoverDecoration: 'underline',
};

// Grid columns
//
// Set the number of columns and specify the width of the gutters.
const grid = {
  gutterWidth: '32px';
};

// Components
//
// Define common padding and border radius sizes and more.
const component = {
  lineHeightLg: '1.5',
  lineHeightSm: '1.5',
  borderRadius: '.375rem',
  borderRadiusLg: '.375rem',
  borderRadiusSm: '.375rem',
  activeBg: colors.primary,
};

// Elevation

const boxShadow = {
  elevation: {
    level1: '0px 2px 8px 0px rgba(0,0,0,0.15), 0px 2px 4px 0px rgba(0,0,0,0.15)',
    level2: '0px 4px 10px 0px rgba(0,0,0,0.15), 0px 8px 16px 0px rgba(0,0,0,0.15)',
    level3: '0px 8px 20px 0px rgba(0,0,0,0.15), 0px 10px 20px 0px rgba(0,0,0,0.15)',
    level4: '0px 8px 48px 0px rgba(0,0,0,0.15), 0px 20px 40px 0px rgba(0,0,0,0.15)',
  },
};
boxShadow.boxShadow = boxShadow.elevation.level1;
boxShadow.boxShadowSm = boxShadow.elevation.level2;
boxShadow.boxShadowLg = boxShadow.elevation.level3;


const caret = {};
caret.width = '.3em';
caret.verticalAlign = `${caret.width} * .67`;
caret.spacing = `${caret.width} * 1`;

// Typography
//
// Font, line-height, and color for body text, headings, and more.

const fontFamilies = {
  sansSerif: [
    "Inter",
    "HelveticafNeue",
    "Arial",
    "sans-serif"
  ],
  monospace: [
    "Roboto Mono",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
};
fontFamilies.serif = fontFamilies.sansSerif;

const lineHeight = {
  base: '1.55555555555555',
};

const fontSizes = {
  base: '1.125rem' // Assumes the browser default, typically `16px`
  sm: '0.875rem',
  xSm: '0.75rem',

  h1: '2.5rem',
  h2: '2rem',
  h3: '1.375rem',
  h4: '1.125rem',
  h5: '.875rem',
  h6: '.75rem',

  h1Mobile: '2.25rem',
}
fontSizes.lg = `${fontSizes.base} * 1.25`;

fontSizes.h2Mobile = fontSizes.h2;
fontSizes.h3Mobile = fontSizes.h3;
fontSizes.h4Mobile = fontSizes.h4;
fontSizes.h5Mobile = fontSizes.h5;
fontSizes.h6Mobile = fontSizes.h6;


const text = {
  headings: {
    fontWeight: 700;
    color: colors.dark500;
  },
  displayWeight: {
    1: 700,
    2: 700,
    3: 700,
    4: 700,
  };
  lead: {
    fontSize: '1.375rem',
    fontWeight: 400,
  }
  muted: colors.gray500;
};

// Buttons + Forms
//
// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.
const inputBtn = {
  paddingY: '0.5625rem',
  paddingX: '1rem',
  fontSize: '1.125rem',
  lineHeight: '1.33334',

  focusWidth: '1px',
  focusColor: component.activeBg,

  paddingYSm: '0.4375rem',
  paddingXSm: '0.75rem',
  fontSizeSm: '0.875rem',
  lineHeightSm: '1.42858',

  paddingYLg: '0.6875rem',
  paddingXLg: '1.25rem',
  fontSizeLg: '1.325rem',
  lineHeightLg: component.lineHeightLg,
  borderWidth: '1px',
}

inputBtn.focusBoxShadow = (
  `0 0 0 ${inputBtn.focusWidth} ${inputBtn.focusColor}`,
);

// Buttons
//
// For each of Bootstrap's buttons, define text, background, and border color.
const button = {
  borderWidth: inputBtn.borderWidth,
  fontWeight: 500,
  boxShadow: 'none',
  disabledOpacity: .4,
  tertiary: {
    color: colors.gray700,
    bg: 'transparent',
    hoverBg: colors.light500,
    activebg: colors.light500,
  }.
  inverseTertiary: {
    color: colors.white,
    bg: 'transparent',
    hoverBg: colors.primary300,
    activeBg: colors.primary300,
  },

  // Allows for customizing button radius independently from global border radius
  borderRadius: 0,
  borderRadiusLg:  0,
  borderRadiusSm:  0,

  focusGap: '2px',
  focusWidth: '2px',
};

// Forms
const inputStyles = {
  bg: colors.white,
  color: components.bodyColor,
  boxShadow: 'none',
  borderRadius: 0,
  borderRadiusLg: 0,
  borderRadiusSm: 0,

  focusBg: colors.white,
  focusBorderColor: component.activeBg,
  focusBoxShadow: inputBtn.focusBoxShadow,
};


// Form validation
const formFeedback = {
  validColor: colors.success,
  invalidColor: colors.danger,
  iconValid: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='2 2 20 20'%3e%3cpath fill='#{$form-feedback-icon-valid-color}' d='M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M17.5208153,8.03553391 L10.4497475,15.1066017 L6.91421356,11.5710678 L5.5,12.9852814 L10.4497475,17.9350288 L18.9350288,9.44974747 L17.5208153,8.03553391 Z'/%3e%3c/svg%3e"),
  iconInvalid: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='#{$form-feedback-icon-invalid-color}' viewBox='2 2 20 20'%3e%3cpath d='M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M13.25,15.5 L10.75,15.5 C10.6119288,15.5 10.5,15.6119288 10.5,15.75 L10.5,15.75 L10.5,18.25 C10.5,18.3880712 10.6119288,18.5 10.75,18.5 L10.75,18.5 L13.25,18.5 C13.3880712,18.5 13.5,18.3880712 13.5,18.25 L13.5,18.25 L13.5,15.75 C13.5,15.6119288 13.3880712,15.5 13.25,15.5 L13.25,15.5 Z M13.492539,5.5 L10.5001113,5.50010806 C10.3620998,5.50416722 10.2535099,5.61933826 10.2575691,5.75734976 L10.2575691,5.75734976 L10.4928632,13.7573498 C10.4968382,13.8925005 10.607546,14 10.7427552,14 L10.7427552,14 L13.2572448,14 C13.392454,14 13.5031618,13.8925005 13.5071368,13.7573498 L13.5071368,13.7573498 L13.7424309,5.75734976 L13.7424309,5.75734976 C13.742539,5.61192881 13.6306101,5.5 13.492539,5.5 L13.492539,5.5 Z' /%3e%3c/svg%3E"),
};
formFeedback.states = {
  valid: {
    color: formFeedback.validColor,
    icon: formFeedback.iconValid
  },
  invalid: {
    color: formFeedback.invalidColor,
    icon: formFeedback.iconInvalid,
  },
};
formFeedback.iconValidColor = formFeedback.validColor;
formFeedback.iconInvalidColor = formFeedback.invalidColor;

const nav = {
  tabsBorderRadius: 0,
  pillsBorderRadius: 0,
};

// Dropdowns
//
// Dropdown menu container and contents.
const dropdown = {
  padding-y: '.5rem',
  border-width: '0',
  box-shadow: $level-2-box-shadow,
  item-padding-y: '.625rem',
};


// Pagination
const pagination = {
  color: colors.primary;
}

// Cards
const card = {
  spacerY: '1rem',
  spacerX: '1.5rem',
};

const theme = {
  colors,
  brandColors,
  elementColorLevels,
  yiqColors,
  body,
  link,
  grid,
  component,
  boxShadow,
  caret,
  fontFamilies,
  lineHeight,
  fontSizes,
  text,
  inputBtn,
  button,
  inputStyles,
  formFeedback,
  nav,
  dropdown,
  pagination,
};
