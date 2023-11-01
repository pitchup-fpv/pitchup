import { extendTheme } from '@mui/joy/styles';
import { Inter, Source_Code_Pro } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  adjustFontFallback: false, // prevent NextJS from adding its own fallback font
  fallback: ['var(--joy-fontFamily-fallback)'], // use Joy UI's fallback font
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  adjustFontFallback: false, // prevent NextJS from adding its own fallback font
  fallback: [
    // the default theme's fallback for monospace fonts
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
  display: 'swap',
});

const palette = {
  primary: {
    color: "black",
    solidBg: '#ffd368',
    solidHoverBg: '#f4fc61',
    solidActiveBg: 'purple',
    solidActiveBorder: 'red',
    solidDisabledBg: 'yellow',
    solidDisabledBorder: 'green',
  },
};

const theme = extendTheme({
  colorSchemes: {
    light: { palette },
    dark: { palette },
  },
  fontFamily: {
    body: inter.style.fontFamily,
    display: inter.style.fontFamily,
    code: sourceCodePro.style.fontFamily,
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.color === 'primary' && {
            color: theme.vars.palette.background.level1,
          }),
        }),
      },
    },
    JoyCheckbox: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.color === 'primary' && {
            " span": {
              color: theme.vars.palette.background.level1,
            }
          }),
        }),
      },
    },
  }
});

export default theme;