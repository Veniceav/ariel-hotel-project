import React from 'react';
import { Flex, Grid, GridItem, Text, Box } from '@chakra-ui/react';
import images from '../../../assets/Images/images';

const BuildingLayout = () => {
  return (
    <Flex h={'100vh'} w={'100vw'} marginTop="0!important" align="end">
      <Grid
        h="90%"
        w="100%"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
      >
        <GridItem rowSpan={3} colSpan={3}>
          <Box
            h="100%"
            w="100%"
            bgImage={images.photo[0]}
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPos={'center'}
            filter={'saturate(0%)'}
          ></Box>
        </GridItem>
        <GridItem paddingLeft={10} rowSpan={2} colSpan={2}>
          <Flex
            direction="column"
            h="100%"
            w="100%"
            bgSize="cover"
            bgRepeat="no-repeat"
          >
            <Flex borderBottom="1px solid gray" h="50px" width="70%">
              <Text fontSize={'3xl'} color="whiteAlpha.900">
                Tools and Enviroment
              </Text>
            </Flex>
            <Flex width="100%">
              <Text
                w="50%"
                fontSize={'xl'}
                textAlign="left"
                color="whiteAlpha.700"
                mt="10px"
              >
                We accomodate by providing all the tools and space required to
                see your ideas through. <br /> <br />
                With state 4 of the art recording studios. 2 - 1200 sq foot
                units available for all your filming or photography needs(props
                and extras not included). <br /> <br />
                And, anything from cameras, to microphones, to instruments, and
                more is all available to you.
              </Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem rowSpan={1} colSpan={5} bg="transparent">
          <Flex
            borderTop="1px solid gray"
            justify={'space-between'}
            align="center"
            w="100%"
            h="100%"
            direction={'row'}
          >
            <Text color="whiteAlpha.900" fontSize={'9xl'}>
              .02
            </Text>
            <Text
              letterSpacing={5}
              color="whiteAlpha.900"
              fontSize={'9xl'}
              casing="uppercase"
            >
              Journey
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default BuildingLayout;
