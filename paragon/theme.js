const applyTheme = (oldTheme) => {
  // The theme.js for Paragon. The structure of this object follows the
  // theme specification found here: https://system-ui.com/theme/.
  // Theme values not defined here will fallback to their Paragon defaults.
  const theme = { ...oldTheme };

  theme.colors = {
    ...theme.colors,
    blue: '#00688D',
    red: '#AB0D02',
    yellow: '#D6B600',
    green: '#0D7D4D',
  };

  theme.themeColors = {
    primary: '#00262B', // elm
    brand: '#D23228',
    success: theme.colors.green,
    info: theme.colors.blue,
    danger: theme.colors.red,
    warning: theme.colors.yellow,
    light: '#E1DDDB', // limestone
    dark: '#00262B', // elm
    accentA: '#03C7E8', // isotope blue
    accentB: '#F0CC00', // oxide yellow
  };

  theme.themeColorLevels = { ...theme.themeColorLevels,
    primary300: '#2D494E',
    primary400: '#0E3639',
    primary500: theme.themeColors.primary,
    primary600: '#002326',
    primary700: '#002121',

    brand500: theme.themeColors.brand,
    brand700: '#921108',
    light200: '#FBFAF9',
    light300: '#F2F0EF',
    light400: '#EAE6E5',
    light500: theme.themeColors.light,
    light700: '#D7D3D1',

    dark200: '#475B65',
    dark300: '#2D494E',
    dark400: '#0E3639',
    dark500: theme.themeColors.dark,
    dark600: '#002326',
    dark700: '#002121',

    info100: '#EFF8FA',
    info200: '#9CD2E6',
    info300: '#1C8DBE',
    info500: theme.themeColors.info,
    info700: '#004972',
    info900: '#002F4A',

    success100: '#F2FAF7',
    success200: '#BBE6D7',
    success300: '#30A171',
    success500: theme.themeColors.success,
    success700: '#175B3C',
    success900: '#0F4D0F',

    danger100: '#FCF1F4',
    danger200: '#F3AEA9',
    danger300: '#CA3A2F',
    danger500: theme.themeColors.danger,
    danger700: '#951C13',
    danger900: '#690E07',

    warning100: '#FFFADB',
    warning200: '#FFEA75',
    warning300: '#F0CC00',
    warning500: theme.themeColors.warning,
    warning700: '#998200',
    warning900: '#7A6800',
  };

  // Color system

  // Brand colors. Do not use these variables (L208 - L219).
  // They are non-standard theme variables and will be removed in a future release.

  theme.brandColors = {
    garnet: theme.themeColors.brand,
    elm: theme.themeColors.primary,
    limestone: theme.themeColors.light,
    limestone500: theme.themeColorLevels.light700,
    limestone300: theme.themeColorLevels.light400,
    limestone200: theme.themeColorLevels.light300,
    limestone100: theme.themeColorLevels.light200,
    isotopeBlue: theme.themeColors.accentA,
    oxideYellow: theme.themeColors.accentB,
    textGray: theme.colors.gray700,
    textElm: theme.themeColorLevels.primary300,
    linkBlue: theme.themeColors.info,
  };

  theme.elementColorLevels.focus = 700;

  // Customize the light and dark text colors for use in our YIQ color contrast function.
  theme.yiq = { ...theme.yiq,
    textDark: theme.colors.black,
    textLight: theme.colors.white,
  };

  // Body
  //
  // Settings for the `<body>` element.
  theme.body = { ...theme.body,
    bg: theme.colors.white,
    color: theme.colors.gray700,
  };

  // Links
  //
  // Style anchor elements.
  theme.link = {
    color: theme.themeColors.info,
    decoration: 'none',
    hoverColor: theme.themeColorLevels.info700,
    hoverDecoration: 'underline',
  };

  // Grid columns
  //
  // Set the number of columns and specify the width of the gutters.
  theme.grid.gutterWidth = '32px';

  // Components
  //
  // Define common padding and border radius sizes and more.
  theme.component.border.radiusLg = '.375rem';
  theme.component.border.radiusSm = '.375rem';
  theme.component.active.bg = theme.themeColors.primary;

  // Elevation

  theme.boxShadow = {
    level1: '0px 2px 8px 0px rgba(0,0,0,0.15), 0px 2px 4px 0px rgba(0,0,0,0.15)',
    level2: '0px 4px 10px 0px rgba(0,0,0,0.15), 0px 8px 16px 0px rgba(0,0,0,0.15)',
    level3: '0px 8px 20px 0px rgba(0,0,0,0.15), 0px 10px 20px 0px rgba(0,0,0,0.15)',
    level4: '0px 8px 48px 0px rgba(0,0,0,0.15), 0px 20px 40px 0px rgba(0,0,0,0.15)',
  };
  theme.component.boxShadow = theme.boxShadow.level1;
  theme.component.boxShadowSm = theme.boxShadow.level2;
  theme.component.boxShadowLg = theme.boxShadow.level3;

  theme.component.caret = { ...theme.component.caret,
    width: '.3em',
    verticalAlign: '.3em * .67',
    spacing: '.3em * 1',
  };

  // Typography
  //
  // Font, line-height, and color for body text, headings, and more.

  theme.text.fontFamilies = { ...theme.text.fontFamilies,
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
  theme.text.fontFamilies.serif = theme.text.fontFamilies.sansSerif;

  theme.text.headings.color = theme.themeColorLevels.dark500;
  theme.text.lead = {
    fontSize: '1.375rem',
    fontWeight: 400,
  };
  theme.text.muted = theme.colors.gray500;

  // Buttons
  //
  // For each of Bootstrap's buttons, define text, background, and border color.
  theme.btn = {
    borderWidth: theme.inputBtn.borderWidth,
    fontWeight: 500,
    boxShadow: 'none',
    disabledOpacity: .4,
    tertiary: {
      color: theme.colors.gray700,
      bg: 'transparent',
      hoverBg: theme.themeColorLevels.light500,
      activebg: theme.themeColorLevels.light500,
    },
    inverseTertiary: {
      color: theme.colors.white,
      bg: 'transparent',
      hoverBg: theme.themeColorLevels.primary300,
      activeBg: theme.themeColorLevels.primary300,
    },

    // Allows for customizing button radius independently from global border radius
    borderRadius: 0,
    borderRadiusLg:  0,
    borderRadiusSm:  0,

    focusGap: '2px',
    focusWidth: '2px',
  };

  // Forms
  theme.input = {
    bg: theme.colors.white,
    color: theme.body.color,
    boxShadow: 'none',
    borderRadius: 0,
    borderRadiusLg: 0,
    borderRadiusSm: 0,
    focusBg: theme.colors.white,
    focusBorderColor: theme.component.active.bg,
    focusBoxShadow: theme.inputBtn.focusBoxShadow,
  };


  // Form validation
  theme.formFeedback = {
    validColor: theme.themeColors.success,
    invalidColor: theme.themeColors.danger,
    iconValid: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='2 2 20 20'%3e%3cpath fill='#{$form-feedback-icon-valid-color}' d='M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M17.5208153,8.03553391 L10.4497475,15.1066017 L6.91421356,11.5710678 L5.5,12.9852814 L10.4497475,17.9350288 L18.9350288,9.44974747 L17.5208153,8.03553391 Z'/%3e%3c/svg%3e")`,
    iconInvalid: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='#{$form-feedback-icon-invalid-color}' viewBox='2 2 20 20'%3e%3cpath d='M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M13.25,15.5 L10.75,15.5 C10.6119288,15.5 10.5,15.6119288 10.5,15.75 L10.5,15.75 L10.5,18.25 C10.5,18.3880712 10.6119288,18.5 10.75,18.5 L10.75,18.5 L13.25,18.5 C13.3880712,18.5 13.5,18.3880712 13.5,18.25 L13.5,18.25 L13.5,15.75 C13.5,15.6119288 13.3880712,15.5 13.25,15.5 L13.25,15.5 Z M13.492539,5.5 L10.5001113,5.50010806 C10.3620998,5.50416722 10.2535099,5.61933826 10.2575691,5.75734976 L10.2575691,5.75734976 L10.4928632,13.7573498 C10.4968382,13.8925005 10.607546,14 10.7427552,14 L10.7427552,14 L13.2572448,14 C13.392454,14 13.5031618,13.8925005 13.5071368,13.7573498 L13.5071368,13.7573498 L13.7424309,5.75734976 L13.7424309,5.75734976 C13.742539,5.61192881 13.6306101,5.5 13.492539,5.5 L13.492539,5.5 Z' /%3e%3c/svg%3E")`,
  };
  theme.formFeedback.iconValidColor = theme.formFeedback.validColor;
  theme.formFeedback.iconInvalidColor = theme.formFeedback.invalidColor;
  theme.formValidationStates = {
    valid: {
      color: theme.formFeedback.validColor,
      icon: theme.formFeedback.iconValid
    },
    invalid: {
      color: theme.formFeedback.invalidColor,
      icon: theme.formFeedback.iconInvalid,
    },
  };

  theme.nav = {
    borderRadius: {
      tabs: 0,
      pills: 0,
    },
  };

  // Dropdowns
  //
  // Dropdown menu container and contents.
  theme.dropdown = {
    paddingY: '.5rem',
    borderWidth: '0',
    boxShadow: theme.boxShadow.level2,
    itemPaddingY: '.625rem',
  };


  // Pagination
  theme.pagination = { color: theme.themeColors.primary };

  // Cards
  theme.card = {
    spacerY: '1rem',
    spacerX: '1.5rem',
  };
  
  return theme;
};

export default applyTheme
