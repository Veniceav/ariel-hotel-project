import { Grid, GridItem, Button, Box, Flex, Text } from '@chakra-ui/react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';
import ModalContainer from './Modal';
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

const clientId = '1CykcKmwoo6fBcyXNbGITEP0GSBKjseqTkZAODdAjMs';
const unsplash = createApi({
  accessKey: clientId,
});

const RemoveBTN = () => {
  return (
    <Button
      colorScheme="blackAlpha"
      variant="ghost"
      width="40%"
      height="60px"
      position="relative"
      top="78%"
      borderRadius="0"
      background="rgba(30, 30, 30, 0.3)"
      color="rgba(255, 255, 255, 0.5)"
      _hover={{ background: 'rgba(20, 20, 20, 0.7)' }}
    >
      Remove from Gallery
    </Button>
  );
};

const PreviewWindow = ({ currentImg, ...p }) => {
  return (
    <Box
      w="100vw"
      onClick={() => p.openModal(true)}
      h={'40%'}
      bg={currentImg ? `url(${currentImg})` : 'black'}
      bgPosition="center"
      bgSize="cover"
      transition="height 1s"
      bgRepeat="no-repeat"
      pointerEvents={currentImg ? 'auto' : 'none'}
      _hover={{
        cursor: 'pointer',
        height: currentImg ? '150%' : '40%',
      }}
      {...p}
    >
      {!currentImg && (
        <Flex direction="column">
          <Flex direction="row" justify="space-between" pb={15}>
            <Text
              color="whiteAlpha.900"
              userSelect={'none'}
              fontSize={'9xl'}
              letterSpacing={5}
              fontWeight={100}
              textAlign="left"
            >
              .03
            </Text>
            <Text
              color="whiteAlpha.900"
              userSelect={'none'}
              fontSize={'9xl'}
              letterSpacing={5}
              fontWeight={100}
              textAlign="left"
              casing="uppercase"
            >
              Result
            </Text>
          </Flex>
          <Flex direction="column" align="center" color="whiteAlpha.900">
            <Text
              color="whiteAlpha.900"
              userSelect="none"
              fontSize="2xl"
              textAlign="center"
              pb={20}
            >
              Last years intake.
              <br />
              Click once for a preview, DoubleClick for fullscreen
            </Text>
            <AiOutlineArrowDown fontSize={22} />
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

const GalleryItem = props => {
  return (
    <GridItem
      onClick={props.clickHandler}
      onDoubleClick={props.doubleClick}
      bg={props.bg}
      rowSpan={props.rowSpan}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      transition="transform 0.5s, filter 1s"
      _hover={{
        cursor: 'pointer',
        transform: 'scale(0.95)',
        filter: 'brightness(1.3)',
        border: '1px solid gray',
      }}
      onMouseOver={props.mouseOver}
    ></GridItem>
  );
};

const GalleryContainer = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  console.log(images[currentIndex], images, currentIndex);

  const currentImg = images[currentIndex] ? images[currentIndex].urls.full : '';
  const currentUser = images[currentIndex]
    ? images[currentIndex].user.username
    : '';

  const closeModel = () => {
    setOpenModal(false);
  };
  console.log(currentIndex);
  const nextImg = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImg = () => {
    setCurrentIndex(currentIndex - 1);
    console.log(currentIndex);
  };

  useEffect(() => {
    unsplash.search
      .getPhotos({ query: 'studio', perPage: 28, color: 'black' })
      .then(response => {
        console.log(response);
        setImages(response.response.results);
      });
    console.log('rerender');
  }, []);

  return (
    <>
      <Flex direction="column" w="100vw" h="100vh">
        <PreviewWindow
          currentImg={currentImg}
          onClick={() => setOpenModal(true)}
        />

        <Grid
          borderTop="1px solid gray"
          templateColumns="repeat(4, 1fr)"
          autoRows="300px"
          bg="black"
          gap={0}
          w="100%"
          margin={'0!important'}
          padding={'0!important'}
          h="60%"
          minH="20%"
          overflow="scroll"
          scrollBehavior="smooth"
          style={{
            scrollbarColor: 'white white',
            scrollbarWidth: 'thin',
          }}
        >
          {images.map((item, index) => {
            return (
              <GalleryItem
                rowSpan="auto"
                index={index}
                doubleClick={() => setOpenModal(true)}
                clickHandler={() => setCurrentIndex(index)}
                key={item.id}
                alt={item.alt_description}
                bg={`url(${item.urls.full})`}
              />
            );
          })}
        </Grid>
      </Flex>
      {openModal && (
        <ModalContainer
          currentImg={currentImg}
          closeModal={setOpenModal}
          username={currentUser}
          next={nextImg}
          previous={prevImg}
        />
      )}
    </>
  );
};

const Gallery = () => {
  return <GalleryContainer />;
};

export default Gallery;
