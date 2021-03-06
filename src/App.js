import React from 'react';
import './app.css';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Home from './pages/home/Home';
import 'normalize.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className="container" overflow="hidden">
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;

/*      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */
