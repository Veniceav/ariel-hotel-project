import React from 'react';
import { Flex, Grid, Box, GridItem, Text } from '@chakra-ui/react';
import images from '../../../assets/Images/images';
import Carousel from '../../../global-components/Carousel';

const CameraSection = () => {
  return (
    <Flex h={'100vh'} w={'100vw'} marginTop="0!important" align="end">
      <Grid
        h="90%"
        w="100%"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Flex
            direction="column"
            h="100%"
            w="100%"
            bgSize="cover"
            bgRepeat="no-repeat"
          >
            <Flex borderBottom="1px solid gray" h="50px" width="70%">
              <Text fontSize={'3xl'} color="whiteAlpha.900">
                Collaberate and Expand
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
                We aim to cultivate a space that curates to creators looking to
                expand their creative vision, but lack the tools and resources
                to do so. <br /> <br />
                Our facilities encourage a more colaberative enviroment by
                accepting creators from a multitude of artistic facets.
              </Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem rowSpan={2} colSpan={3}>
          <Box
            h="100%"
            w="100%"
            bgImage={images.carousel[1]}
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPos={'0px -200px'}
            filter={'saturate(0%)'}
          ></Box>
        </GridItem>

        <GridItem rowSpan={1} colSpan={3} bg="transparent">
          <Carousel gap={5} images={images.carousel} />
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
              .01
            </Text>
            <Text
              letterSpacing={5}
              color="whiteAlpha.900"
              fontSize={'9xl'}
              casing="uppercase"
            >
              Initiative
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default CameraSection;
