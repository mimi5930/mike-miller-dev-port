import '@fontsource/press-start-2p';
import '@fontsource/share-tech-mono';

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Press Start 2P', cursive`,
    body: `'Share Tech Mono', monospace`
  }
});

export default theme;
