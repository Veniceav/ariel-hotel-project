import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import 'normalize.css';

const Banner = props => {
  return (
    <Flex h="5%" w="100%" align="center" ml={180} mb={5}>
      <Text
        fontSize={'8xl'}
        casing="uppercase"
        letterSpacing={3}
        color="whiteAlpha.900"
      >
        {props.title}
      </Text>
    </Flex>
  );
};

export default Banner;
