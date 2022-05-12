import React from 'react';
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Fade,
  Sticky,
  batch,
  MoveOut,
} from 'react-scroll-motion';
import 'normalize.css';
import { motion } from 'framer-motion';
import images from '../../../assets/Images/images';

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  transition: { duration: 1 },
};

const Banner = props => {
  return (
    <ScrollContainer>
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ delay: 0, duration: 3 }}
      >
        <Flex
          marginTop="0!important"
          justify={'center'}
          w="100vw"
          h={'100vh'}
          display="flex"
          bgImage={images.music[0]}
          bgSize="cover"
          filter={'saturate(0%)'}
          align="center"
        >
          <Button
            colorScheme={'whiteAlpha'}
            variant={'outline'}
            size="md"
            color="white"
            fontFamily={"'Varela', sans-serif"}
            onClick={() =>
              alert("We're not taking anymore Admissions at this time")
            }
          >
            Register Today
          </Button>
          <ScrollPage page={0}>
            <Animator
              animation={batch(Fade(0, 1), Sticky(55, 12), MoveOut(0, 700))}
            >
              <Text
                fontFamily={"'Varela', sans-serif"}
                fontSize={'8xl'}
                w={'100vw'}
                color={'whiteAlpha.800'}
                casing="uppercase"
                letterSpacing="5px"
                fontWeight="400"
              >
                Aerial Hotel
              </Text>
            </Animator>
            <Animator
              animation={batch(Fade(0, 1), Sticky(130, 90), MoveOut(0, -200))}
            >
              <Text
                fontFamily={"'Varela', sans-serif"}
                fontSize={'2xl'}
                w={'100vw'}
                color={'whiteAlpha.800'}
                casing="uppercase"
                letterSpacing="1px"
                fontWeight="400"
              >
                Eat, Sleep, Create
              </Text>
            </Animator>
          </ScrollPage>
        </Flex>
      </motion.div>
    </ScrollContainer>
  );
};

export default Banner;
