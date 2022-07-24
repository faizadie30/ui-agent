import { extendTheme } from '@chakra-ui/react';
import '@fontsource/nunito/';
// import { StyleFunctionProps } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    black: 'BlackAlpha 700',
    white: 'White',
    primary: { 400: '#4299E1', 600: '#2B6CB0' },
  },
  components: {
    Button: {
      variants: {
        'btn-primary': {
          bg: 'blue.400',
          color: 'white',
          _hover: {
            bg: 'blue.600',
          },
        },
      },
    },
    Link: {
      variants: {
        'link-primary': {
          color: 'blue.400',
          _hover: {
            color: 'blue.600',
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        margin: 0,
        fontFamily: `'Nunito', sans-serif;`,
        webkitFontSmoothing: 'antialiased',
        mozFontSmoothing: 'grayscale',
      },
      code: {
        fontFamily: `'Nunito', sans-serif;`,
      },
    },
  },
});
export default theme;
