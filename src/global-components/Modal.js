import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

const ModalContainer = ({
  username,
  currentImg,
  closeModal,
  next,
  previous,
}) => {
  return (
    <Box
      className="modalBackground"
      display="block"
      pos="fixed"
      zIndex={1}
      left={0}
      top={0}
      w={'100%'}
      h={'100%'}
      bgColor={'rgba(0,0,0,0.9)'}
      color="white"
      border="1px solid gray"
      mt={1}
    >
      <Box
        className="Container"
        display="block"
        dir="row"
        m="auto"
        w="95vw"
        h="100vh"
        bgColor="alphaBlack.900"
        opacity={1}
        color="white"
      >
        <Flex className="Modal-top-bar" dir="row">
          <Button
            colorScheme="blackAlpha"
            variant="ghost"
            size="sm"
            color="white"
            fontSize={28}
            position="relative"
            bottom={'15%'}
            left={'97.5%'}
            onClick={() => closeModal(false)}
          >
            x
          </Button>
          <Box className="artistInfo" m={2}>
            {username}
          </Box>
        </Flex>
        <Box
          className="modalContent"
          m="auto"
          maxW="100%"
          maxH="90vh"
          h={1080}
          w={1920}
          bg={`url(${currentImg})`}
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPos="center"
        />

        <Flex
          dir="row"
          alignItems="center"
          h="5%"
          w="100%"
          justify="space-around"
        >
          <Button
            color="whiteAlpha.800"
            border="none"
            onClick={() => previous()}
            colorScheme="blackAlpha"
            variant="ghost"
            size="sm"
            fontSize={20}
            position="relative"
            _hover={{
              background: 'rgba(0,0,0,0.1)',
            }}
          >
            Back
          </Button>
          <Button
            onClick={() => next()}
            color="whiteAlpha.800"
            border="none"
            colorScheme="blackAlpha"
            variant="ghost"
            size="sm"
            fontSize={20}
            position="relative"
            _hover={{
              background: 'rgba(0,0,0,0.1)',
            }}
          >
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ModalContainer;
