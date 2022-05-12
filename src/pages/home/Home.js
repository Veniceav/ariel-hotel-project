import { Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  FadeIn,
  FadeOut,
  Sticky,
  batch,
  MoveOut,
  MoveIn,
  Fade,
} from 'react-scroll-motion';
import Navbar from '../../global-components/Navbar';
import HomeBanner from './components/HomeBanner.js';
import Gallery from '../../global-components/Gallery';
import CameraSection from './components/CameraSection';
import BuildingLayout from './components/BuildingLayout';
import 'normalize.css';
import images from '../../assets/Images/images';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      when: 'afterChildren',
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Home = () => {
  return (
    <ScrollContainer snap="proximity">
      <VStack
        m={0}
        p={0}
        className="container"
        w="100%"
        fontFamily={"'Varela', sans-serif"}
        overflow="hidden"
        bg="black"
      >
        <Navbar
          logo="AH"
          brandName=""
          link1="Pricing"
          link2="Schedule"
          link3="Contact/Register"
        />

        <ScrollPage page={0}>
          <Animator animation={batch(MoveOut(0, 200), FadeOut(1, 0))}>
            <HomeBanner />
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator
            animation={batch(
              FadeIn(0, 1),
              FadeOut(1, 0),
              MoveIn(0, -500),
              MoveOut(0, 800)
            )}
          >
            <CameraSection />
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator
            animation={batch(
              FadeIn(0, 1),
              FadeOut(1, 0),
              MoveIn(0, -800),
              MoveOut(0, 1000)
            )}
          >
            <BuildingLayout />
          </Animator>
        </ScrollPage>
        <Gallery />
      </VStack>
    </ScrollContainer>
  );
};

export default Home;
//https://images.unsplash.com/photo-1602191378712-e31d11f31135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80
//https://images.unsplash.com/photo-1536258632717-5d5045c77a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1708&q=80
/* <Grid
                h="80%"
                w="100%"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <Box
                    h="100%"
                    w="100%"
                    bgSize="contain"
                    bgImage="transparent"
                  ></Box>
                </GridItem>

                <GridItem colSpan={4}>
                  <Box
                    h="100%"
                    w="100%"
                    bgImage={images.film.cameraRight}
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    bgPos={'0px -140px'}
                    filter={'saturate(0%)'}
                  ></Box>
                </GridItem>

                <GridItem colSpan={4} bg="transparent">
                  <Box
                    h="100%"
                    w="100%"
                    bgImage={images.film.cameraLeft}
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    bgPos={'0px -170px'}
                    filter={'saturate(0%)'}
                  ></Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Box
                    h="100%"
                    w="100%"
                    bgSize="contain"
                    bgImage="transparent"
                  ></Box>
                </GridItem>
              </Grid> */
